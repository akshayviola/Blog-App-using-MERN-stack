const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://akshaysunil201:uqguf6LRHq3cLTIC@blog-app-cluster.swl1nki.mongodb.net/?retryWrites=true&w=majority&appName=blog-app-cluster").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})
