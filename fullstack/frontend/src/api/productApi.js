import axios from "axios";

const API= axios.create({
    baseURL:"http://localhost:3000/api"
})

export const getProducts=async()=>{
    const res=await API.get(`/products`);
    return res.data.products;
}

export const getProductById=async(id)=>{
    const res=await API.get(`/products/${id}`)
    return res.data.product
}
