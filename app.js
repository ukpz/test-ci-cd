const express=require('express')
require('dotenv').config()

const app=express();

app.get('/',(_,res)=>{
    res.json('update server is up & running...'); 
})  
app.get('/new',(_,res)=>{
    res.json('new api is running...');
})  


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));