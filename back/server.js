const express = require('express')
const app = express()
//npm install cors
//const cors = require('cors')
// app.use(cors()) // http://localhost3001 <- 라이브러리로 한줄컷 가능..

app.use(express.json())
app.use(express.urlencoded({extended:true,}))

app.use('/',(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3001')
    res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS,DELETE')
    res.setHeader('Access-Control-Allow-Credentials','true')
    res.setHeader('Access-Control-Allow-Headers','Content-type')
    next()
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.setHeader('Set-cookie','ingoo=name; Domain=localhost;')
    res.send('123123')
})

app.listen(4001,()=>{
    console.log('server시작')
})