var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

var port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log('app listening on port: '+port))