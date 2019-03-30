const express = require('express');

// app variable initialized with express
const app = express();

const PORT = process.env.PORT || 5000;

// .listen () runs a server on PORT paassed in as first argument
app.listen(PORT,console.log(`Server started on Port ${PORT}`));