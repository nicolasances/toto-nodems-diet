var express = require('express');
var Promise = require('promise');
var bodyParser = require("body-parser");
var logger = require('toto-apimon-events');

var getWaterConsumptionGoalDlg = require('./dlg/GetWaterConsumptionGoalDelegate');
var getWaterDlg = require('./dlg/GetWaterDelegate');
var postWaterDlg = require('./dlg/PostWaterDelegate');
var putWaterConsumptionGoalDlg = require('./dlg/PutWaterConsumptionGoalDelegate');
var getFoodsDlg = require('./dlg/GetFoodsDelegate');
var postFoodDlg = require('./dlg/PostFoodDelegate');
var putFood = require('./dlg/PutFood');
var deleteFoodDlg = require('./dlg/DeleteFoodDelegate');
var getMealsDlg = require('./dlg/GetMealsDelegate');
var postMealDlg = require('./dlg/PostMealDelegate');
var getMealPrepsDlg = require('./dlg/GetMealPrepsDelegate');
var postMealPrepDlg = require('./dlg/PostMealPrepDelegate');
var deleteMealPrep = require('./dlg/DeleteMealPrep');
var getMealPrep = require('./dlg/GetMealPrep');
var putMealPrep = require('./dlg/PutMealPrepDelegate');
var getGoal = require('./dlg/goal/GetGoal');
var postGoal = require('./dlg/goal/PostGoal');
var putGoal = require('./dlg/goal/PutGoal');

var apiName = 'diet';

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  next();
});
app.use(bodyParser.json());

app.get('/', function(req, res) {res.send({api: apiName, status: 'running'});});
app.get('/water', function(req, res) {logger.apiCalled('diet', '/water', 'GET', req.query, req.params, req.body); getWaterDlg.getWater({date: req.query.date}).then(function(result) {res.send(result);});});
app.post('/water', function(req, res) {logger.apiCalled('diet', '/water', 'POST', req.query, req.params, req.body); postWaterDlg.postWater(req.body).then(function(result) {res.send(result);});});
app.get('/water/goal', function(req, res) {logger.apiCalled('diet', '/water/goal', 'GET', req.query, req.params, req.body); getWaterConsumptionGoalDlg.getWaterConsumptionGoal().then(function(result) {res.send(result);});});
app.put('/water/goal', function(req, res) {logger.apiCalled('diet', '/water/goal', 'PUT', req.query, req.params, req.body); putWaterConsumptionGoalDlg.putWaterConsumptionGoal(req.body).then(function(result) {res.send(result);});});
app.get('/foods', function(req, res) {logger.apiCalled('diet', '/foods', 'GET', req.query, req.params, req.body); getFoodsDlg.getFoods({category: req.query.category}).then(function(result) {res.send(result);});});
app.post('/foods', function(req, res) {logger.apiCalled('diet', '/foods', 'POST', req.query, req.params, req.body); postFoodDlg.postFood(req.body).then(function(result) {res.send(result);});});
app.delete('/foods/:id', function(req, res) {logger.apiCalled('diet', '/foods/{id}', 'DELETE', req.query, req.params, req.body); deleteFoodDlg.deleteFood(req.params.id).then(function(result) {res.send(result);});});
app.put('/foods/:id', function(req, res) {logger.apiCalled('diet', '/foods/{id}', 'PUT', req.query, req.params, req.body); putFood.do(req.params.id, req.body).then(function(result) {res.send(result);});});
app.get('/meals', function(req, res) {logger.apiCalled('diet', '/meals', 'GET', req.query, req.params, req.body); getMealsDlg.getMeals(req.query.date, req.query.dateFrom).then(function(result) {res.send(result);});});
app.post('/meals', function(req, res) {logger.apiCalled('diet', '/meals', 'POST', req.query, req.params, req.body); postMealDlg.postMeal(req.body).then(function(result) {res.send(result);});});
app.get('/mealPreps', function(req, res) {logger.apiCalled('diet', '/mealPreps', 'GET', req.query, req.params, req.body); getMealPrepsDlg.getMealPreps().then(function(result) {res.send(result);});});
app.post('/mealPreps', function(req, res) {logger.apiCalled('diet', '/mealPreps', 'POST', req.query, req.params, req.body); postMealPrepDlg.postMealPrep(req.body).then(function(result) {res.send(result);});});
app.delete('/mealPreps/:id', function(req, res) {logger.apiCalled('diet', '/mealPreps/{id}', 'DELETE', req.query, req.params, req.body); deleteMealPrep.do(req.params.id).then(function(result) {res.send(result);});});
app.get('/mealPreps/:id', function(req, res) {logger.apiCalled('diet', '/mealPreps/{id}', 'GET', req.query, req.params, req.body); getMealPrep.do(req.params.id).then(function(result) {res.send(result);});});
app.put('/mealPreps/:id', function(req, res) {logger.apiCalled('diet', '/mealPreps/{id}', 'PUT', req.query, req.params, req.body); putMealPrep.do(req.params.id, req.body).then(function(result) {res.send(result);});});
app.get('/goal', function(req, res) {logger.apiCalled('diet', '/goal', 'GET', req.query, req.params, req.body); getGoal.do().then(function(result) {res.send(result);});});
app.post('/goal', function(req, res) {logger.apiCalled('diet', '/goal', 'POST', req.query, req.params, req.body); postGoal.do(req.body).then(function(result) {res.send(result);});});
app.put('/goal/:id', function(req, res) {logger.apiCalled('diet', '/goal', 'PUT', req.query, req.params, req.body); putGoal.do(req.params.id, req.body).then(function(result) {res.send(result);});});

app.listen(8080, function() {
  console.log('Diet Microservice up and running!');
});
