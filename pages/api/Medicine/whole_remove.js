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
        const { uid, _id } = req.body;
        console.log(req.body);

        // find appropiate user for the addition
        User.updateOne(
            { uid },
            {
                $pull: {
                    stock: { _id }
                }
            },
            { safe: true },
            function removeConnectionsCB(err, obj) {
                console.log(err);
            }
        );

        res.send({ msg: 'Medicie Successfully Removed...' })
    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}