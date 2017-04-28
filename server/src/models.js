'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  name: String,
  season: Number,
  episode: Number,
  src: String
});

const ShowSchema = new Schema({
  name: String,
  episodes: [EpisodeSchema]
});

const sortEpisodes = (a, b) => {
  if (a.season === b.season) {
    return b.episode - a.episode;
  }
  return b.season - a.season;
}

EpisodeSchema.method('update', function(updates, callback) {
  Object.assign(this, updates);
  this.parent().save(callback);
});

ShowSchema.pre('save', function(next){
  this.episodes.sort(sortEpisodes);
  next();
});

const Show = mongoose.model('show', ShowSchema);

module.exports.Show = Show;
