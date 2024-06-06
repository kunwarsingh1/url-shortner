const express  = require('express')

const model = require('./db')

const router = require('./router')

const app = express()


app.use(express.json())

app.use('/',router)



app.listen(9000,console.log('server listening at port 9000'))