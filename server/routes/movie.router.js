const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//pulls info from the database saga_movies_weekend, movies table
router.get('/', (req, res) => {
    console.log('in movie.router:', req.body);
    let queryText = 'SELECT * FROM "movies";';
    pool.queryText(queryText)
    .then(result => {
        res.send(result.row);
    })
    .catch(error => {
        console.log("Error in movies.router GET", error)
        res.sendStatus(500);
    })
})

module.exports = router;
// app.use('/movies', moviesRouter);
