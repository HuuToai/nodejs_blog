const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(            express.json()); //XMLhttprequest fetch axios
app.use(                express.static(path.join(__dirname, 'public')));

//http logger
// app.use(morgan('combined'));

//template engine
app.engine('hbs',
    engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views')); //sửa lại nếu máy mac /
// console.log('dirname', __dirname);
//router init
route(app);

app.listen(port, () =>
    console.log('Example app listening at http://localhost:${port}'),
);
