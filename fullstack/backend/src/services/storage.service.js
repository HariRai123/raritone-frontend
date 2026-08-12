const ImageKit=require("@imagekit/nodejs");

const imagekit=new ImageKit({
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY,
})

async function uploadFile(buffer) {
    const result=await imagekit.files.upload({
        file:buffer.toString("base64"),
        fileName:`product-${Date.now()}.jpg`
    })
    return result
}

module.exports=uploadFile