const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
    watch:true,
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3001,()=>{
    console.log('server시작')
})