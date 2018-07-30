const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/webdev-summer2018-angular'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/webdev-summer2018-angular/index.html'));
});
app.listen(process.env.PORT || 8080);
