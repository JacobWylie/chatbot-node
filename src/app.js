const express    	   = require('express'),
	  app 	     	   = express(),
	  bodyParser 	   = require('body-parser'),
	  cors             = require('cors'),
	  server     	   = require('http').Server(app),
	  productDetails   = require('./bot/productDetails'),
	  helperFunctions  = require('./bot/functions');
	  
	 

// Parse data through body/form
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.get('/chatbot', function (req, res) {
	let func = helperFunctions[req.query.func];
	let val = req.query.value;
	res.send(func(val));
})

///////////////////////////
// SERVER
///////////////////////////

// Run api on port 8085 on Digital Ocean Server. Use PM2.
server.listen(8085, () => {
    console.log("App is running on port 8085");
});