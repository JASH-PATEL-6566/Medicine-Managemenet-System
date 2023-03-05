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
        const { uid, _id, quantity, remove_quantity } = req.body;
        console.log(req.body);

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
                        res.send({ msg: 'Medicie Successfully Removed...' })
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}