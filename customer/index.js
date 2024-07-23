import express from "express"

const app =express();

app.use(express.json());

app.use("/",(req,res,next)=>{
res.status(200).json({"message":"Hello from customer!!"});
})


app.listen(8001,()=>{
    console.log("customer is listening to port 8001");
})