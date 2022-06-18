const NewsBlog=require("../model/newsmodel")
const postNews=async(req,res)=>{
    const data=req.body
    const newNews=new NewsBlog(data)
    console.log(data)
   try{
  await newNews.save()
    res.status(200).json({
        message:"message send"
    })}catch(e){
        res.status(404).json({
            message: e.message,
          });
}}
const getNews=async(req,res)=>{
  
   try{
const newsList=  await NewsBlog.find()
    res.status(200).json(newsList)}catch(e){
        res.status(404).json({
            message: e.message,
          });
    }}



module.exports={postNews,getNews};