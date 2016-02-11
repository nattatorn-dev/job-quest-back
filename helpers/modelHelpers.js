exports.populate = function populateModel(model, obj) {
  for (var prop in obj) {
    model[prop] = obj[prop];
  }
  return model;
};

exports.save = function save(model) {
  return new Promise(function(resolve, reject) {
    model.save(function(err, data) {
      if (err) {
        reject("An error has occured while attempting to add your record.");
      }
      resolve(data);
    });
  });
}

exports.findOne = function findOne(model, searchCriteria, populate) {
  return new Promise(function(resolve, reject) {
    var query = model.findOne(searchCriteria).populate(populate);
    query.exec(function(err, docs) {
      if (err) {
        reject("An error has occured while attempting to add your record.");
      }
      resolve(docs);
    });
  });
};

exports.find = function find(model, select, populate) {
  var query = model.find({}, select)
    .populate(populate);
  return new Promise(function(resolve, reject) {
    query.exec(function(err, docs) {
      if (err) {
        reject("An error has occured while attempting to add your record.");
      }
      resolve(docs);
    })
  });
};

exports.remove = function remove(model, searchCriteria, populate) {
  return new Promise(function(resolve, reject) {
    var query = model.remove(searchCriteria).populate(populate);
    query.exec(function(err, docs) {
      if (err) {
        reject("An error has occured while attempting to add your record.");
      }
      resolve(docs);
    });
  });
};
