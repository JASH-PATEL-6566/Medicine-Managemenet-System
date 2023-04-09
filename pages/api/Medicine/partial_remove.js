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
        const { uid, _id, quantity, remove_quantity, name, type, uploadOn } = req.body;
        // console.log(req.body);

        // find appropiate user for the addition

        User.findById(uid, (err, user) => {
            if (err) {
                console.error(err);
            } else {
                // console.log(user);
                user.stock.find(s => s._id.toString() === _id).quantity = quantity - remove_quantity;
                user.save((err, updatedUser) => {
                    if (err) {
                        console.error(err);
                    } else {
                        User.findById(uid)
                            .then((data) => {
                                const prev_data = data.history;
                                const current_data = {
                                    name,
                                    quantity: remove_quantity,
                                    total_quantity: (quantity - remove_quantity),
                                    updateon: uploadOn,
                                    type
                                }

                                const new_data = [current_data, ...prev_data];
                                User.findByIdAndUpdate(uid,
                                    {
                                        "$set": {
                                            "history": new_data
                                        }
                                    },
                                    { "new": true, "upsert": true },
                                    function (err, managerparent) {
                                        if (err) throw err;
                                        res.send({ msg: 'Medicie Successfully Removed...' })
                                    }
                                )
                            })
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}