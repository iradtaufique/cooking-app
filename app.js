const express = require('express');
require('dotenv').config();
const expressLayout = require('express-ejs-layouts');


// Initialize new Application
const app = express();
const port = process.env.PORT || 3000;

// Application Middlewares
// Template Engine Middleware
app.set('view engine', 'ejs');

// urlencoded for encoding urls
app.use(express.urlencoded({extended: true}));
// staic folder for img, css, js, etc..
app.use(express.static('public'));
// use Express Layout
app.use(expressLayout);

// setting layout structure
app.set('layout', './layouts/main');

// configure routers
const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

// app.get('/', (req, res) =>{
//     res.render('index');
// })


// Port Listening
app.listen(port, ()=>{
    console.log(`application started on http://localhost/${port}`)
})