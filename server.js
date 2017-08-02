var express        = require('express');
var app            = express();

var port = process.env.PORT || 5000; 

app.use(express.static(__dirname + '/public')); 

app.get('/forklifts/', function(req, res) {
	var forklifts = [];
	for(var i=0; i<10; i++){
		forklifts.push({
			id: getRandomNum(1000, 9999),
			name: forkLiftTypes[getRandomNum(0, forkLiftTypes.length-1)],
			model: modelNum[getRandomNum(0, modelNum.length-1)],
		})
	}
	res.send(forklifts);
});

function getRandomNum(minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}

var forkLiftTypes = [
    "Pallet Truck",
    "Walkie Stacker",
    "Electric Warehouse Equipment",
    "Electric Counter Balance Forklift",
    "Internal Combustion Engine Truck",
    "Big Truck",
    "Hand Pallet Jack",
    "Reach Truck",
    "Tow Tractor"
];


var modelNum = [
    "FL 17",
    "FK Big 34",
    "IC 787",
    "IC 897",
    "WS 12",
    "HPJ Small",
    "RT 7",
    "TT 7",
    "BT 12"
];

app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
});


// start app ===============================================
app.listen(port);	
console.log('Server running at ' + port);
exports = module.exports = app; 


