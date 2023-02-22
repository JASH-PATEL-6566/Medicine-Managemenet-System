/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

import Medicine from '../../../Models/medicine';
import connectMongo from '../../../utils/connectMongo';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { name, quantity, price, expiryDate } = req.body;
        console.log(req.body);
        // getting todays date
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}/${month}/${year}`;

        // create new collection
        const medicine = new Medicine({
            name,
            quantity,
            price,
            expiryDate,
            // uploadOn: currentDate
        });

        // save collection
        return medicine.save()
            .then(() => res.send({ msg: 'Medicine Successfully added' }))


    } catch (error) {
        console.log(error);
        res.send({ msg: error });
    }
}