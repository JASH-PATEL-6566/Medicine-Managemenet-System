import { Schema, model, models } from 'mongoose';
import medicineSchema from './medicine';

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
    stock: [medicineSchema]
})

const User = models.user || model('user', userSchema);

export default User;