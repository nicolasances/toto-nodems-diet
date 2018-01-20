var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");

var getWaterConsumptionGoalDlg = require('./dlg/GetWaterConsumptionGoalDelegate');
var getWaterDlg = require('./dlg/GetWaterDelegate');
var postWaterDlg = require('./dlg/PostWaterDelegate');
var putWaterConsumptionGoalDlg = require('./dlg/PutWaterConsumptionGoalDelegate');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, GoogleIdToken");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());

app.get('/', function(req, res) {res.send({status: 'running'});});
app.get('/water', function(req, res) {getWaterDlg.getWater({date: req.query.date}).then(function(result) {res.send(result);});});
app.post('/water', function(req, res) {postWaterDlg.postWater(req.body).then(function(result) {res.send(result);});});
app.get('/water/goal', function(req, res) {getWaterConsumptionGoalDlg.getWaterConsumptionGoal().then(function(result) {res.send(result);});});
app.put('/water/goal', function(req, res) {putWaterConsumptionGoalDlg.putWaterConsumptionGoal(req.body).then(function(result) {res.send(result);});});

app.listen(8080, function() {
  console.log('Diet Microservice up and running');
});
