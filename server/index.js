import express from "express";
 const app=express();
const port=4532;

app.get("/", (req,res) => {
   res.send("HAI");
})
 app.listen(port,() =>{
    console.log("Server running at port ${port}");
 });