var mongoose = require('mongoose');
// var Trip = require('../models/trip');
var Trip = mongoose.model('Trip');
var Helper = require('../helpers/modelHelpers');

exports.add = function(req, res) {
  if (req.body) {
    var trip = Helper.populate(new Trip(), req.body);

    Helper.findOne(Trip, {
        'name': trip.name
      },'trips')
      .then(function(data) {
        return data ? data : Helper.save(trip);
      })
      .then(function(data) {
        res.send(data);
      });

  } else {
    res.send({
      message: "Request body not defined."
    });
  }
};

exports.get = function(req, res) {

  Helper.findOne(Trip, {
      '_id': req.params.id
    }, 'trips')
    .then(function(results) {
      if (results) {
        res.send(results);
      }
    })
    .catch(function(err) {
      res.send({
        error: "An error has occured while attempting to retrieve your record."
      });
    });

};

exports.getAll = function(req, res) {
  Helper.find(Trip, 'trips')
    .then(function(results) {
      if (results) {
        res.send(results);
      }
    })
    .catch(function(err) {
      res.send({
        error: "An error has occured while attempting to retrieve your record."
      });
    });
};

exports.update = function(req, res) {
  if (req.body) {

    Helper.findOne(Trip, {
        '_id': req.params.id
      },'trips')
      .then(function(data) {
        data.name = req.body.name;
        return data ? Helper.save(data) : {error: "An error has occured while attempting to retrieve your record."};
      })
      .then(function(data) {
        res.send(data);
      });

  } else {
    res.send({
      message: "Request body not defined."
    });
  }
};

exports.delete = function(req, res) {
  Helper.remove(Trip, {
      '_id': req.params.id
    }, 'trips')
    .then(function(results) {
      if (results) {
        res.send(results);
      }
    })
    .catch(function(err) {
      res.send({
        error: "An error has occured while attempting to retrieve your record."
      });
    });
};
