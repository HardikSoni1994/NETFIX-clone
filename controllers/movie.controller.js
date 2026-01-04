const Movie = require('../models/movie.model');
const fs = require('fs');
const path = require('path');

const moviePage = (req, res) => {
    return res.render('movieForm');
};

    // insert
const addMovie = async (req, res) => {
    try {
      const movieData = await Movie.create ({
            movie_name: req.body.movie_name,
            movie_description: req.body.movie_description,
            movie_genre: req.body.movie_genre,
            movie_language: req.body.movie_language,
            movie_duration: req.body.movie_duration,
            movie_releaseDate: req.body.movie_releaseDate,
            movie_poster: req.file.filename
        });

        console.log("Movie Inserted Successfully");
        return res.redirect('/movie');

    } catch (error) {
        console.log("Movie Insertion failed..", error);
    }
};

    // Fetch
const allmoviePage = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.render('allMoviePage', { movies });
    } catch (error) {
        console.log(e.message);
        console.log("movie fatch error", error);
    }
};

    // delete
const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;

    const movie = await Movie.findById(id);

    const poster = path.join(__dirname, '..', 'uploads', movie.movie_poster);

    await Movie.findByIdAndDelete(id);
    console.log("Movie Deleted Successfully");

    fs.unlink(poster, (error) => {
        if (error) {
            console.log("poster deletion failed..", error);
        }
        else {
            console.log("poster deleted successfully..");
        }
    });
    return res.redirect('/movie/allMovie');

    } catch (error) {
    console.log("movie Deletion failed..", error);   
    }
};

    // edit
const editMoviePage = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        return res.render('editMoviePage', { movie }); 
    } catch (error) {
        console.log("Movie edit failed..", error);
    }
};

    // Update
    const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;

    const oldMovie = await Movie.findById(id);
    if (!oldMovie) {
      return res.redirect('/movie/allMovie');
    }

    let posterName = oldMovie.movie_poster;

    // agar new poster aaya hai
    if (req.file) {
      posterName = req.file.filename;

      // old poster delete (simple try-catch)
      try {
        fs.unlink(
          path.join(__dirname, '..', 'uploads', oldMovie.movie_poster),
          () => {}
        );
      } catch (err) {
        console.log('Old poster already deleted');
      }
    }

    await Movie.findByIdAndUpdate(id, {
      movie_name: req.body.movie_name,
      movie_description: req.body.movie_description,
      movie_genre: req.body.movie_genre,
      movie_language: req.body.movie_language,
      movie_duration: req.body.movie_duration,
      movie_releaseDate: req.body.movie_releaseDate,
      movie_poster: posterName
    });

    return res.redirect('/movie/allMovie');

  } catch (error) {
    console.log('Update movie error:', error);
    return res.redirect('/movie/allMovie');
  }
};

module.exports = {moviePage, addMovie, allmoviePage, deleteMovie, editMoviePage, updateMovie};
