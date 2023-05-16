/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// import Medicine from '../../../Models/medicine';
import User from '../../../Models/user';
import connectMongo from '../../../utils/connectMongo';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { uid, _id, quantity, remove_quantity, name, type, uploadOn, date, price } = req.body;
        // console.log(req.body);

        // find appropiate user for the addition
        const salesAmount = price * remove_quantity;

        User.findById(uid, (err, user) => {
            if (err) {
                console.error(err);
            } else {
                const currentQuantity = user.totalSale;
                user.stock.find(s => s._id.toString() === _id).quantity = quantity - remove_quantity;

                // console.log("in");
                user.save((err, updatedUser) => {
                    if (err) {
                        console.error(err);
                    } else {
                        User.findOneAndUpdate(
                            { uid },
                            {
                                $push: {
                                    history: {
                                        $each: [{
                                            name,
                                            quantity: remove_quantity,
                                            total_quantity: (quantity - remove_quantity),
                                            updateon: uploadOn,
                                            type
                                        }], $position: 0
                                    },
                                    sales: {
                                        $each: [{
                                            name,
                                            quantity,
                                            remaining_quantity: (quantity - remove_quantity),
                                            sales_ammount: (quantity * price),
                                            date
                                        }], $position: 0
                                    }
                                },
                                $set: {
                                    totalSale: currentQuantity + salesAmount
                                }
                            },
                            { new: true },
                            function removeConnectionsCB(err, obj) {
                                if (err) {
                                    console.error(err);
                                } else {
                                    res.send({ msg: 'Medicie Successfully Sell...' })
                                }
                            }
                        );
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}