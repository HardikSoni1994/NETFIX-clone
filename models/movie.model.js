const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
    {
        movie_name: {
            type: String,
            require: true,
        },
        movie_description: {
            type: String,
            require: true,
        },
        movie_genre: {
            type: String,
            require: true,
        },
        movie_language: {
            type: String,
            require: true,
        },
        movie_duration: {
            type: String,
            require: true,
        },
        movie_releaseDate: {
            type: String,
            require: true,
        },
        movie_poster: {
            type: String,
            require: true,
        }
    }
);

module.exports = mongoose.model("Movie", movieSchema, "Movie");