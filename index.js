const express= require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');
const router = require('./routes/routes.js');




const App = express();

//settings
App.set('port', process.env.PORT || 3000);


//middlewares
App.use(bodyParser.urlencoded({extended: true})); 
App.use(morgan('dev'));
App.use(bodyParser.json());

//routes
App.use('/', router);

//static files 
App.use(express.static(path.join(__dirname,'public')));



App.listen(App.get('port'), function(){
    console.log("server on port "+App.get('port'));
})