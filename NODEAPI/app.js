var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI'); // connects to the DB

var Book = require('./models/bookModel'); // model

var app = express();

var port = process.env.Port || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
      Book.find(function(err, books){
        if(err)
          res.status(500).send(err);
        else
          res.json(books);
      });
    });


app.use('/api', bookRouter);

app.get('/', function(req, res){
  res.send('welcome to my API');
});

app.listen(port, function(){
  console.log('Gulp is running my app on Port: ' + port);
});
