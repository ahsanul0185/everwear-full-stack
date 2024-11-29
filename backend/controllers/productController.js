import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js'

// Add new product
const addNewProduct = async (req, res) => {
    try {
        
        const {name, description, price, category, subcategory, sizes, bestseller} = req.body;
        
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // get cloudinary links for the images---------
        let imagesURL = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type : 'image'});
                return result.secure_url
            })
        );

        const productData = {
            name,
            description,
            category,
            subcategory,
            price : Number(price),
            bestseller : bestseller === "true" ? true : false,
            sizes : JSON.parse(sizes),
            image : imagesURL,
            date  : Date.now()
        }

        const product = new productModel(productData);

        await product.save();

        res.status(201).json({success : true, message : "Product Added"});

    } catch (error) {
        res.json({success : false, message : error.message})
    }
}

// Get all the products
const listProducts = async (req, res) => {
    try {
        
        const products = await productModel.find({});
        res.status(200).json({success : true, message : "Product returned successfully", payload : products})

    } catch (error) {
        res.json({success : false, message : error.message})
    }
}

// Remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.status(200).json({success : true, message : "Product removed successfully"})
    } catch (error) {
        res.json({success : false, message : error.message})
    }
}

// Get a single product
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.status(200).json({success : true, message : "Single product returned successfully", payload : product})

    } catch (error) {
        res.json({success : false, message : error.message})
        
    }
}

export {addNewProduct, listProducts, removeProduct, singleProduct};