// Create a simple server
// const http = require("http");
// const server =http.createServer((req,res)=>{
//     res.end("Hello World..!!!");
// })

// server.listen(3000);

// create a simple routes
// const http = require("http");
// const server =http.createServer((req,res)=>{
//     // routes
//     if(req.url == "/about"){
//         console.log("About Pages...!!"); // its display on the terminal
//         res.end("About Pages") // its display on the webpages
//     }
//     else if(req.url == "/profile"){
//         console.log("Profiles pages");
//         res.end("profiles")
//     }else if(req.url === "/"){
//         console.log("Home Pages...!!!");
//         res.end("Home Pages..!!")
//     }

//     // res.end("Hello sonu");
// });

// server.listen(3000);

// create four routes using express.js
const express = require("express");
const app = express();

app.get("/",(req ,res)=>{
    res.send("Home Pages");
})

app.get("/about",(req ,res)=>{
    res.send("about Pages");
})

app.get("/profile",(req ,res)=>{
    res.send("profile Pages");
})

app.get("/contact",(req ,res)=>{
    res.send("Contact Pages");
})

// listen to server
app.listen(3000 ,(req,res)=>{
    console.log(`server is running on port ${3000}`)
})