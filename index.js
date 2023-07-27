const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3700

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'client')))

app.use('/openai', require('./routes/aiRoutes'))

app.listen(port, () => console.log(`Server started on ${port}`))