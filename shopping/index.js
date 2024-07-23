import express from "express"

const app =express();

app.use(express.json());

app.use("/",(req,res,next)=>{
res.status(200).json({"message":"Hello from shopping!!"});
})


app.listen(8003,()=>{
    console.log("customer is listening to port 8003");
})