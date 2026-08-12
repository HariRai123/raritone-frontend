const express= require("express");
const router =express.Router();
const multer = require("multer");
const { postProducts, getProducts, getProductById } = require("../controllers/product.controller");
const upload = multer({storage:multer.memoryStorage()})
router.post("/products",upload.single("image"),postProducts)
router.get("/products",getProducts)
router.get("/products/:id",getProductById)
module.exports=router