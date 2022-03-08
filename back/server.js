const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true,}))

app.use(cookieParser())
/*
 req.headers.cookies
 str = key=value& => { }
*/
app.use(cors())
// app.use('/',(req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS,DELETE')
//     res.setHeader('Access-Control-Allow-Credentials','true')
//     res.setHeader('Access-Control-Allow-Headers','Content-type')
//     next()
// })


app.post('/',(req,res)=>{
    console.log(req.body)
    res.setHeader('Set-cookie','ingoo=name; Domain=localhost;')
    res.send('123123')
})

app.post('/api/user/join',(req,res)=>{
    console.log(req.body)
    res.send('데이터 잘 도착')
})

app.listen(4001,()=>{
    console.log('server시작')
})