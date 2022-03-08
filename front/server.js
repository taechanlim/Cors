const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
    watch:true,
})
//메인 페이지
app.get('/',(req,res)=>{
    res.render('index')
})

//회원가입 페이지
app.get('/user/join',(req,res)=>{
    res.render('join')
})

//로그인 페이지
app.get('/user/login',(req,res)=>{
    res.render('login')
})

//프로필 페이지
app.get('/user/profile',(req,res)=>{
    res.render('profile')
})


app.listen(3001,()=>{
    console.log('server시작')
})