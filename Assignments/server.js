const express=require('express')
const app=express()
app.set('view engine', 'ejs')
app.use(express.static('js'))
app.use(express.static('Style'))
app.get("/",(req,res)=>{
    res.render('newsblog')
})
app.listen(3000) 