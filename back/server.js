const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const promisePool = require('./db').pool
// const pool = require('./db').pool
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

// let userSqlInsert = `INSERT INTO userdb(userlevel,userid,userpw,name,nickname,gender,phone,mobile,active) VALUES('${level}','${userId}','${userPw}','${userName}','${nickname}','${gender}','${phoneNumber}','${active}')`

app.post('/',(req,res)=>{
    console.log(req.body)
    res.setHeader('Set-cookie','ingoo=name; Domain=localhost;')
    res.send('123123')
})

app.post('/api/user/join', async (req,res)=>{
        let {userid,userpw,username,nickname,birth,gender,phone,mobile} = req.body
        let Sql = `INSERT INTO user(userid,userpw,name,nickname,birth,gender,phone,mobile) VALUES('${userid}','${userpw}','${username}','${nickname}',${birth},'${gender}','${phone}','${mobile}')`
        const conn = await promisePool.getConnection()
        const result = conn.query(Sql)
        const response = {
                    result:result,
                    errno:0,
                }
        
        res.send(JSON.stringify(response))
})

// 수업시간 코드 맨위에 pool주석풀고사용
// app.post('/api/user/join', async (req,res)=>{
//     //const conn = await pool.getConnection() async를 쓰면 pool.getConnection이 없어도 pool.execute()로 가능하다
//     const {userid,userpw,name,nickname,phone,mobile}= req.body
    
//     const sql = `INSERT INTO user(
//         userlevel,
//         userid,
//         userpw,
//         name,
//         nickname,
//         birth,
//         gender,
//         phone,
//         mobile
//     ) values(
//         ?,?,?,?,?,now(),'1',?,?
//     )`

//     const prepare = [1,userid,userpw,name,nickname,phone,mobile]

//     const [result] = await pool.execute(sql,prepare)
//     // 1. SQL구문(string) , 2. prepare 내용 (array 배열) 
//     //DB에 해당 SQL을 던져서 요청을 보내고 
//     //DB가 그 해당 SQL을 실행해서 결과물을 result라는 변수에 담은것.
//     const response = {
//         result:result,
//         errno:0,
//     }

//     //response 데이터타입은 객체다.
//     //통신할때는 string으로만 가능합니다.
//     // JSON.stringify(response)
//     res.send(JSON.stringify(response)) // -> res.json(response)로 사용가능합니다.
// })

app.listen(4001,()=>{
    console.log('server시작')
})