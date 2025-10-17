const express=require('express')


const app=express();

app.get('/',(_,res)=>{
    res.json('server is up & running...');
})  


app.listen(8000,()=>console.log('server is running on port 8000'));