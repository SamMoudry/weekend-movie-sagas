const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
    const query = `
        SELECT title, description, name FROM movies
        JOIN movies_genres ON movie_id = movies.id
        JOIN genres ON genres.id = genre_id
        WHERE movies.id = ` + req.body.id;
    pool.query(query)
        .then( result => {
            res.send(result.rows);
          })
          .catch(err => {
            console.log('ERROR: Get all movies', err);
            res.sendStatus(500)
          })
  });

  module.exports = router;