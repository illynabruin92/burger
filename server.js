// DEPENDENCIES


// Initialize Express app
var express = require('express');

// include method-override
var methodOverride = require('method-override');

//include bodyParser
var bodyParser = require('body-parser');

//set up express
var app = express();

//static app content from public directory
app.use(express.static(process.cwd() + '/public'));

// bodyParser middleware
app.use(bodyParser.urlencoded({extended: false })); 

//POST method override
app.use(methodOverride('_method'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes
var routes = require('./addyourburger/burger_add.js');
app.use('/', routes);

var port = 3000;
app.listen(port);