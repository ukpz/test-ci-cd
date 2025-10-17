const express=require('express')
require('dotenv').config()

const app=express();

app.get('/',(_,res)=>{
    res.json('server is up & running...');
})  


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));