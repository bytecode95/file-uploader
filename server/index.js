const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors');


const port = 3000
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//get Routers

const product = require('./routers/productRouter');

app.use('/uploads', express.static('./uploads'));
app.use('/api', product)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })