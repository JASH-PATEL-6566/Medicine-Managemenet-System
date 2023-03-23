/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import User from '../../../Models/user';
import connectMongo from '../../../utils/connectMongo';


export default async function fetch(req, res) {
    try {
        // connect mongodb
        await connectMongo();
        const { uid } = req.body;

        User.findById(uid, function (err, docs) {
            if (err) {
                res.send("error")
            }
            else {
                res.send(docs);
            }
        })
    }
    catch (error) {
        res.send({ error });
    }
}