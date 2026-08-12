const express= require("express")
const productRoutes=require("./routes/product.routes")
const app=express();
const cors= require("cors")

app.use(cors());

app.use(express.json());

app.use("/api",productRoutes);

module.exports=app;