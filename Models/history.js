import { Schema } from 'mongoose';

const historySchema = new Schema({
    name: String,
    quantity: Number,
    total_quantity: Number,
    price: Number,
    updateon: String,
    type: String
})


export default historySchema;