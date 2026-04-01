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
// const express = require("express");
// const app = express();

// app.get("/",(req ,res)=>{
//     res.send("Home Pages");
// })

// app.get("/about",(req ,res)=>{
//     res.send("about Pages");
// })

// app.get("/profile",(req ,res)=>{
//     res.send("profile Pages");
// })

// app.get("/contact",(req ,res)=>{
//     res.send("Contact Pages");
// })

// // listen to server
// app.listen(3000 ,(req,res)=>{
//     console.log(`server is running on port ${3000}`)
// })

// How to display html files
// const express = require("express");
// const app = express();

// app.set("view engine","ejs");

// app.use("/",(req,res,next)=>{
//     console.log("This is a Middlewere");
//     let a = 5;
//     let b = 6;
//     console.log("a + b:",a+b);
//     return next();
// })
// // create 4 four routes
// app.get("/",(req ,res)=>{
//     console.log("Home Page");
//     // res.send("Home Pages...!!");
//     res.render("index")
// })

// app.get("/about",(req ,res)=>{
//     console.log("about Page");
//     res.send("about Pages...!!");
// })

// app.get("/profiles",(req ,res)=>{
//     console.log("profiles Page");
//     res.send("profiles Pages...!!");
// })

// app.get("/contact",(req ,res)=>{
//     console.log("contact Page");
//     res.send("contact Pages...!!");
// })

// app.listen(3000,(req,res)=>{
//     console.log(`Server is running on the port ${3000}`)
// });


// built in middlewere
// example-> morgan ->it is http request logger middlewere in nodejs

const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.set("view engine","ejs");

app.use((req,res,next)=>{
    console.log("Morgan middlewere");
    let a = 5;
    let b = 6;
    console.log("a+b:",a+b);
    next();
})

// routes
app.get("/",(req,res)=>{
    console.log("Home Pages");
    res.render("index")
});

app.get("/about",(req,res)=>{
    console.log("about pages");
    res.send("about pages..!!");
});

app.get("/contact",(req,res)=>{
    console.log("contact pages..!!!");
    res.send("contact pages..!!!");
})

app.listen(3000,(req ,res)=>{
    console.log(`server is running on the port:${3000}`)
})