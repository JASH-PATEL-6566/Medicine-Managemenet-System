/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import User from '../../../Models/user';
import connectMongo from '../../../utils/connectMongo';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { displayName, email, uid } = req.body;
        // console.log(req.body);

        // create new collection

        const user = new User({
            _id: uid,
            userName: displayName,
            email
        });

        // save collection
        return user.save()
            .then(() => res.send({ msg: 'User Successfully added' }))


    } catch (error) {
        // console.log(error);
        res.send({ msg: error });
    }
}