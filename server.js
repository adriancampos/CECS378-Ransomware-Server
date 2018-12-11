var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Keypair = require('./api/models/keypairListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Keypairdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/keypairListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Ransomeware RESTful API server started on: ' + port);
