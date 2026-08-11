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

fetchUser
.then((user)=>{
    console.log("User : ",user)
})
.catch((err)=>{
    console.log("Error : ",err)
})


//chaining promises
fetch('/api/products')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    return fetch(`/api/products/${data[0].id}`)
})
.then(res=>res.json())
.then(detail=>console.log(detail))
.catch(Error=>console.log("Server crashed : ",err))

