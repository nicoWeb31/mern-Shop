import Category from "../models/category.js";
import slugify from "slugify";
import asyncHandler from "express-async-handler";

export const create = async (req, res, next) => {
    const { name } = req.body;

    try {
        const category = await Category.create({ name });

        res.status(201).json({
            status: "success",
            category,
        });
    } catch (error) {
        // console.log(error)
        res.status(400).json({
            message: error.message,
        });
    }
};

export const read = async (req, res, next) => {
    try {
        
        const category = await Category.findOne({slug:req.params.slug })
        if(!category) {
            return res.status(404).json({message: 'category not found with this slug'})
        }
        res.status(200).json({
            status: 'success',
            category
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
};

export const update = async (req, res, next) => {
    // console.log(req.params.slug, req.body.name)

    try {
        const categoryUpdated = await Category.findOneAndUpdate({slug: req.params.slug},{name: req.body.name, slug:slugify(req.body.name)},{new: true});
        if(!categoryUpdated){
            return res.status(404).json({message: 'category not find with this slug'});
        }

        res.status(201).json({
            status:'success',
            categoryUpdated
        })


    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }

};

export const remove = async (req, res, next) => {
    try {
        const category = await Category.findOneAndDelete({slug: req.params.slug})
        if(!category){
            return res.status(404).json({message: 'category not find with this slug'});
        }
        res.status(204).json({
            status:"success"
        })

    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
};

export const list = async (req, res, next) => {
    try {
        const category = await Category.find().sort({ createAt: -1 });

        res.status(200).json({
            status: "success",
            length: category.length,
            category,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
