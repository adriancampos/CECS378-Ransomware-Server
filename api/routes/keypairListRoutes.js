'use strict';
module.exports = function(app) {
  var keypairList = require('../controllers/keypairListController');

  // keypairList Routes
  app.route('/keypairs')
    .get(keypairList.list_all_keypairs)
    .post(keypairList.create_a_keypair);


  app.route('/keypairs/:pubkey')
    .get(keypairList.read_a_keypair)

  app.route('/keypairs/:pubkey/allowed')
    .post(keypairList.set_keypair_allowed)

};
