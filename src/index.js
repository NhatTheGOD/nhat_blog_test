const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express()

app.use(morgan('common'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('views', path.join(__dirname, 'resource/views'));
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/news', function (req, res) {
  res.render('news')
})

app.listen(3000)
