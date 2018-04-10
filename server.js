const express = require('express'),
  app = express(),
  path = require('path');

app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/'));

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname + './dist/index.html'));
});

let server = app.listen(app.get('port'), () => {
  console.log ('The appliction, "Fibbo-Notch It", is now running on ' + server.address().port);
});