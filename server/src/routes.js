'use strict';

const express = require('express');
const router = express.Router();
const Show = require('./models').Show;

router.param('sID', (req, res, next, id) => {
  Show.findById(id, (err, doc) => {
    if (err) {
      return next(err);
    }
    if (!doc) {
      err = new Error('Not Found');
      err.status = 404;
      return next(err);
    }
    req.show = doc;
    return next();
  });
});

router.param('eID', (req, res, next, id) => {
  req.episode = req.show.episodes.id(id);
  if (!req.episode) {
    err = new Error('Not Found');
    err.status = 404;
    return next(err);
  }
  next();
})
// GET /shows
// Return all the shows
router.get('/', (req, res, next) => {
  Show.find({})
    .sort({name: 1})
    .exec((err, show) => {
      if (err) {
        return next(err);
      }
      res.json(show);
    });
});

// POST /shows
// Route for creating shows
router.post('/', (req, res) => {
  console.log('req.body', req.body);
  var show = new Show(req.body);
  show.save((err, show, next) => {
    if (err) {
      return next(err);
    }
    res.status(201);
    res.json(show);
  });
});

// GET /shows/:sID
// Route for specific shows
router.get('/:sID', (req, res, next) => {
  res.json(req.show);
});

// POST /shows/:sID/episodes
// Route for creating an episode
router.post('/:sID/episodes', (req, res, next) => {
  req.show.episodes.push(req.body);
  req.show.save((err, show) => {
    if (err) {
      return next(err);
    }
    res.status(201);
    res.json(show);
  });
});

// PUT /shows/:sID/episodes/:eID
// Edit a specific episode
router.put('/:sID/episodes/:eID', (req, res) => {
  req.episode.update(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    res.json(result);
  });
});

// DELETE /shows/:sID/episodes/:eID
// Delete a specific episode
router.delete('/:sID/episodes/:eID', (req, res) => {
  req.episode.remove((err) => {
    req.show.save((err, show) => {
      if (err) {
        return next(err);
      }
      res.json(show);
    })
  })
});

module.exports = router;
