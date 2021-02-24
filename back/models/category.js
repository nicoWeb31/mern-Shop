import mongoose from "mongoose";
import slugify from "slugify";

const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true, //ignore space
            required: [true, "Name is required"],
            minlength: [3, "Too short"],
            maxlength: [32, "Too long"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

//-----------------DOCUMENT middlewre------------ run only befere .save() or .create()
//moogose possede aussi des middlewre, pour exectuter des tache avant ou  apres avoir save en bdd.
categorySchema.pre("save", function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});



const Category = mongoose.model("Category", categorySchema);
export default Category;
