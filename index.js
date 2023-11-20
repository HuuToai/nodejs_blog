const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('combined'))
app.get('/', function (req, res) {  
  res.send('Hello World 2012 2003 04012003')
})

app.listen(3000)