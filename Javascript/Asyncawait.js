const { Children } = require("react");

const fetchUser= new Promise((resolve,reject)=>{
    const success=true;
    setTimeout(()=>{
        if(success){
            resolve({name:"Hari",role:"Intern"})
        }
        else{
            reject("Failed to fetch the user details")
        }
    },1000)
})

async function getUser(params) {
    try {
        const user=await fetchUser;
        console.log("User : ",user)
    } catch (error) {
        console.log("Error : ",error)
    }
}

getUser()


async function getProducts(params) {
    try {
        const res=await fetch("/api/products")
        const data= await res.json();
        console.log(data);
        return data;     
    } catch (error) {
        console.log(error)
    }
}


async function getUserandproducts(params) {
    try {
        const [user,products]= await Promise.all([
            fetch("/api/user").then(res=>res.json()),
            fetch("/api/product").then(res=>res.json())
        ])
        console.log(user,products)
    } catch (error) {
        console.log(error)
    }
}