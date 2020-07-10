var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//needed to be able to reference external js and css files
app.use(express.static("public"));

const htmlRoutes = require('./controllers/html');
app.use(htmlRoutes);

const apiRoutes = require('./controllers/api');
app.use(apiRoutes);

app.listen(PORT, function () {
    console.log('Listening on PORT ' + PORT);
});

