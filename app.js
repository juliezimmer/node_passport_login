const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// app variable initialized with express
const app = express();

// Middleware for EJS - order of these two statements is important!
app.use(expressLayouts);
app.set('view engine', 'ejs')

// Use Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

// .listen () runs a server on PORT paassed in as first argument
app.listen(PORT,console.log(`Server started on Port ${PORT}`));