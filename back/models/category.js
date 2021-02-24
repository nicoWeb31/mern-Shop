import mongoose from 'mongoose';

const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        trim: true,//ignore space
        required : [true,'Name is required'],
        minlength:[3,"Too short"],
        maxlength:[32,"Too long"],


    },
    slug:{
        type : String,
        unique:true,
        lowercase:true,
        index:true

    }
},{
    timestamps: true
}

)

const Category = mongoose.model('Category',categorySchema)
export default Category;