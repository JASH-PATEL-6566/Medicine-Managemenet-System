/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// import Medicine from '../../../Models/medicine';

import { Model } from 'mongoose';
import medicineSchema from '../../../Models/medicine';
import User from '../../../Models/user';
import connectMongo from '../../../utils/connectMongo';
import fetch from './fetch';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { uid, name, quantity, price, expiryDate, uploadOn } = req.body;
        // console.log(req.body);

        // find appropiate user for the addition
        User.findByIdAndUpdate(
            uid,
            {
                "$push": {
                    "stock": {
                        name,
                        quantity,
                        price,
                        expiryDate,
                        uploadOn
                    }
                }
            },
            { "new": true, "upsert": true },
            function (err, managerparent) {
                if (err) throw err;

                User.findById(uid)
                    .then((data) => {
                        const prev_data = data.history;
                        const current_total_purchase = data.totalPurchase;
                        const current_data = {
                            name,
                            quantity,
                            amount: (quantity * price),
                            total_quantity: quantity,
                            updateon: uploadOn,
                            type: 'add'
                        }
                        console.log(current_total_purchase + (quantity * price));

                        const new_data = [current_data, ...prev_data];
                        User.findByIdAndUpdate(uid,
                            {
                                "$set": {
                                    "history": new_data,
                                    "totalPurchase": current_total_purchase + (quantity * price),
                                }
                            },
                            { "new": true, "upsert": true },
                            function (err, managerparent) {
                                if (err) throw err;
                                res.send({ msg: 'Medicine Successfully added' })
                            }
                        )
                    })

            })
    } catch (error) {
        // console.log(error);
        res.send({ msg: error });
    }
}
// TODO : date problem 12-10-2031 ...... check