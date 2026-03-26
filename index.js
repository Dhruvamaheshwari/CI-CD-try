const express = require('express')
require('dotenv').config()
const app =express()

app.use(express.json())

app.get('/'  ,(req , res) => {
    res.send('Hello jeee server run ho rha h => Dhruva Maheshwari')
})

app.listen(process.env.PORT || 4000 , ()=>console.log('server is runn on port 4000'))