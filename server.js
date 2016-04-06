'use strict';
var express = require('express');
var app = express();

app.get('/', (req, res) => {

})
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('server is up on 3000');
});
