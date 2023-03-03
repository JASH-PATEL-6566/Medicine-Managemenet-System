import { Schema, model, models } from 'mongoose';

const medicineSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number,
    expiryDate: String,
    uploadOn: String,
})

// const Medicine = models.medicine || model('medicine', medicineSchema);

// export default Medicine
export default medicineSchema;