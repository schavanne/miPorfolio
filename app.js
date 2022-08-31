var createError = require('http-errors');
var express = require('express');
var path = require('path');

var mainRouter = require('./routers/main');
var app = express();

app.listen(3000,()=>{
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/', mainRouter);
});

module.exports = app;
