import express from "express";
import morgan from "morgan";

const app = express();

// custom middle ware
function logger(req,res,next){
    console.log("Request Method: ",req.method);
    console.log("Request URL: ",req.url);
    next();
}

app.use(logger);

app.use("/",(req,res)=>{
    res.send("Hello");
})

app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000");
})