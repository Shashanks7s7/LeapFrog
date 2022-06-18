require('dotenv').config()
const express= require("express")
const app = express()
const mongoose=require('mongoose')
var uri =`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.t3t61.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser: true,

useUnifiedTopology: true})
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Connected to Database"))
const cors=require('cors')
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    console.log("here we goo")
    res.render("index")
})
const userRouter=require('./routes/news')
app.use(express.json())
app.use(cors())
app.use('/news',userRouter)
app.listen(5000,()=> console.log("Server Started")) 