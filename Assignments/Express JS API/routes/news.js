const express=require("express")
const router=express.Router()
const {postNews,getNews}=require("../controller/article.js")

router.post("/post",postNews)
router.get('/get',getNews)

module.exports=router