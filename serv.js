


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
	res.json({message : "Bienvenue sur template API ", methode : req.method});
}

app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function() {
	console.log("Serveur en écoute sur http://" + hostname + ":" + port + "\n");
});