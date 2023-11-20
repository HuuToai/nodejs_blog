const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send('Hello World 2012 2003 04012003')
})

app.listen(3000)