'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KeypairSchema = new Schema({
  privkey: {
    type: String,
    required: 'Enter the private key'
  },
  pubkey: {
    type: String,
    required: 'Enter the public key'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  allowed : {
    type: [{
      type: Boolean,
    }],
    default: false
  }
});

module.exports = mongoose.model('Keypairs', KeypairSchema);
