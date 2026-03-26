const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello jeee server run ho rha h => Dhruva Maheshwari')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`)
})