const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require('./routes/index')
const { connect } = require('./config/mongodb')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router)

connect()
.then(() => {
  console.log('connected to db')
  app.listen(port, () => {
    console.log(`running on port`, port)
  })
})