var express=require('express')
const server=express()
server.set("view engine","ejs")
server.listen(3000,function(){
    console.log("hai, rafi. Server Started Listening")
})


server.get("/",function(req,res){
    res.render('login')
     
 
})
server.post("/validate",function(req,res){
    res.render('home')
})
server.get("/home",function(req,res){
    res.render('home')
})

server.get("/login",function(req,res){
    res.se
})
server.get("/service",function(req,res){
    res.render('service')
})

server.get("/aboutus",function(req,res){
    res.render('aboutus')
})