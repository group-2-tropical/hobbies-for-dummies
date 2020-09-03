require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
// const errHandler = require('./middleware/errHandler')
const port = process.env.PORT || 3000

app
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(cors)
.use(routes)
// .use(errHandler)
.listen(port, () => {
    console.log(`Masuuuk pak ekooo di http://localhost:${port}`);
})