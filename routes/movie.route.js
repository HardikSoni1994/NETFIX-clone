const express = require('express');
const movieRoute = express.Router();
const path = require('path');
const multer = require('multer');

const {moviePage, addMovie, allmoviePage, deleteMovie, editMoviePage, updateMovie} = require('../controllers/movie.controller');

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// routes
movieRoute.get('/', moviePage);
movieRoute.post('/addMovie', upload.single('movie_poster'), addMovie);
movieRoute.get('/allMovie', allmoviePage);
movieRoute.get('/delete/:id', deleteMovie);
movieRoute.get('/edit/:id', editMoviePage);
movieRoute.post('/update/:id', upload.single('movie_poster'), updateMovie);

module.exports = movieRoute;