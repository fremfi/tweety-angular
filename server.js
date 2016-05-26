var express = require('express');
var spawn = require('child_process').spawn;
var path = require('path');
var http = require('http');
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;
var publicPath = path.join(__dirname, '/dist');

app.use(express.static(publicPath));
app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: static_path
  });
});

spawn('twitter-proxy');
var server = http.createServer(app).listen(port, function() {
  console.log('Server running on port ' + port);
});
