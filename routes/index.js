const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    return res.render('movieForm');
});

route.use('/movie', require('./movie.route'));

module.exports = route;