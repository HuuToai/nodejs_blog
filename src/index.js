const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({
  extname: '.hbs',

}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));//sửa lại nếu máy mac /
// console.log('dirname', __dirname);



app.get('/', function (req, res) {  
  res.render('home');//render trang nào đưa file đấy vào body
})

app.get('/news', function (req, res) {  
  res.render('news');//render trang nào đưa file đấy vào body
})

app.listen(3000);