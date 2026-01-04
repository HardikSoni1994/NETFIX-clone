const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/Movie_Management";

mongoose.connect(URI)
.then(() => {
    console.log("Database is connected..");
})
.catch((error) => {
    console.log("Database is not connected..", error );
});