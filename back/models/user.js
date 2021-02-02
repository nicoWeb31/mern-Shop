import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        required: [true, "Email is required !"],
        index: true
    },
    role: {
        type: String,
        default: "suscriber"
    },
    cart: {
        type: Array,
        default: []
    },
    adress: String,
    // wishlist: [{
    //     type: ObjectId,
    //     ref: "Product"
    // }]


},
{timestamps:true}
)

const User = mongoose.model('User',userSchema);
export default User;

