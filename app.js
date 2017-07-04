var fs=require('fs');
var path=require('path');
var express=require('express');
//创建express的服务器
var app=express();


//托管静态资源
app.use('/node_modules',express.static('node_modules'));
//设置模版引擎
app.set('view engine','ejs');
//模版页面的存放路径
app.set('views','./views')

app.get('/',(req,res)=>{
 res.render('index');
})

app.listen(3005,function (){
    console.log('Express server running at http://127.0.0.1:3005');
})