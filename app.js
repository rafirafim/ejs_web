var express=require('express')
const server=express()
var bodyparser=require('body-parser')
var data=[
    {name:"Ram",age:"12",subject:"maths"},
    {name:"sam",age:"12",subject:"chem"},
    {name:"sumith",age:"24",subject:"maths"}]
server.use(bodyparser.urlencoded({extended:true}))
server.set("view engine","ejs")
server.listen(process.env.PORT||3000,function(){
    console.log("hai, rafi. Server Started Listening")
})


server.get("/",function(req,res){
    res.render('login')
     
 
})
server.post("/validate",function(req,res){
    var user=req.body.userid;
    console.log(user)
    var password=req.body.pass;
    console.log(password)
    if(user=="admin"&&password=="123"){
        res.render('home',{students:data})
    }
    else{
        res.render('login')
    }
     
})
server.get("/home",function(req,res){
    res.render('home')
})

server.get("/login",function(req,res){
    res.render('/')
})
server.get("/service",function(req,res){
    res.render('service')
})

server.get("/aboutus",function(req,res){
    res.render('aboutus')
})