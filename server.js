var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/dist", express.static(__dirname));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});