

// module Express
var express = require('express');
// serve param
var hostname = 'localhost';
var port = 3000;

var app = express();
// make more easly communication with api
var myRouter = express.Router();

myRouter.route('/')
// .all (get, put, post, delete)
.all(function(req, res) {
	res.json({message : "Bienvenue sur mon template API ", methode : req.method});
});

myRouter.route('/msn')
.get(function(req, res) {
	
	var obj = [{
		Id: "198",
		Name: "nicolas",
		Registration: "15-07-1994",
		DeliveryDate: "04-28-2019",
		Model:"fançais"
	},{
		Id: "198",
		Name: "nicolas",
		Registration: "15-07-1994",
		DeliveryDate: "04-28-2019",
		Model:"fançais"
	}];
	
	res.json(JSON.stringify(obj));
});

app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function() {
	console.log("Serveur en écoute sur http://" + hostname + ":" + port + "\n");
});