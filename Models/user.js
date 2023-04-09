import { Schema, model, models } from 'mongoose';
import historySchema from './history';
import medicineSchema from './medicine';
import salesSchema from './sales';

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    stock: [medicineSchema],
    history: [historySchema],
    sales: [salesSchema]
})

const User = models.user || model('user', userSchema);

export default User;