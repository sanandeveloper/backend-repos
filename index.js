
const express=require('express')
require('dotenv').config()
const app=express()


app.get('/',(req,res)=>{

    res.send('hello sanan khan')

})
app.get('/login',(req,res)=>{

res.send('please login to continue')

})
app.get('/login/twitter',(req,res)=>{
res.send('i am inside wittwer')
    
})

app.listen(process.env.PORT,()=>{

    console.log(`app is listening on this ${process.env.PORT
    } `);
    
})