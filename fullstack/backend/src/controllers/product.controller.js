const uploadFile = require("../services/storage.service");
const Product = require("../models/products.model");
async function postProducts(req, res) {
  try {
    const { productId, name, category, price, description, brand, stock } =
      req.body;
    if (!req.file) {
      return res.status(400).json({
        message: "Product Image is required",
      });
    }
    const imageResult = await uploadFile(req.file.buffer);
    const product = await Product.create({
      productId,
      name,
      category,
      price,
      image:imageResult.url,
      description,
      brand,
      stock,
    });
    res.status(201).json({
        message:"Product created successfully",
        product
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create the product",
      error: error.message,
    });
  }
}

async function getProducts(req,res){

    try{
        const products= await Product.find();
        res.status(200).json({
            message:"Products fetched successfully",
            products
        })
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({
            message:"Failed to fetch products",
            error:err.message
        })
    }
}

async function getProductById(req,res){
    try {
        const {id}=req.params ;
        const product= await Product.findById(id);
        if(!product)
        {
            res.status(404).json({
                message:"Product not found"
            })
        }
      return  res.status(200).json({
            message:"Product fetched successfully",
            product
        })
    } catch (error) {
        console.log(err);
        res.status(500).json({
            message:"Failed to fetch products",
            error:err.message
        })
    }
}

module.exports = { postProducts,getProducts,getProductById };
