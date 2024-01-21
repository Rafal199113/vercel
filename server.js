const express = require('express') 
const PORT = process.env.PORT || 3000
const app = express() 
app.get('/api',(req,res)=>{ 
    res.send(`<h5 style="color:green"> 
        Hey Geek! you just deployed serverless express api</h5>`) 
}) 
app.listen(PORT,()=>{ 
    console.log('Server started at http://localhost:8080') 
}) 
module.exports=app