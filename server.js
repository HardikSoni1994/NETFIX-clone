const db = require('./config/db.config');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// call Middleware 
app.use(express.urlencoded());

// middleware for static public & uploads
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'uploads')));

// Routes call
app.use('/', require('./routes'));

// Server started 🚀
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server is not connected..🤯");
        return false;
    }
    else{
        console.log("server is connected ✔✔..😎✌");
    }
});