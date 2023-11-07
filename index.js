const express=require("express")
const mongoose=require("mongoose");
const {router}=require("./routes/bookRoute");
const dotenv=require("dotenv");
dotenv.config()

const PORT=process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI;

app=express()
app.use(express.json())

app.use("/",router);

mongoose.connect(MONGO_URI)
.then(function (db) {
    console.log("db connected...");
})
.catch(function (err) {
    console.log(err);
});


app.listen(PORT,()=>{
    console.log("app listening on port 5000...")
})
