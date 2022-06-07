const express=require('express')
const router=express.Router()


router.get("/",(request,response)=>{
    response.render("pages/shop.ejs");
})

module.exports={router}