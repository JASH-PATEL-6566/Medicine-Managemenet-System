import { Schema } from 'mongoose';

const salesSchema = new Schema({
    name: String,
    quantity: Number,
    remaining_quantity: Number,
    sales_ammount: Number,
    date: String,
})

export default salesSchema;