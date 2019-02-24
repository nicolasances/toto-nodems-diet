var Controller = require('toto-api-controller');

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
var getCaloriesPerDay = require('./dlg/stats/GetCaloriesPerDay');
var getCaloriesPerWeek = require('./dlg/stats/GetCaloriesPerWeek');
var getCategories = require('./dlg/GetCategories');

var apiName = 'diet';

var api = new Controller(apiName);

// app.use('/img', express.static(__dirname + '/img'));

api.path('GET', '/water', getWaterDlg);
api.path('POST', '/water', postWaterDlg);
api.path('GET', '/water/goal', getWaterConsumptionGoalDlg);
api.path('PUT', '/water/goal', putWaterConsumptionGoalDlg);
api.path('GET', '/foods', getFoodsDlg);
api.path('POST', '/foods', postFoodDlg);
api.path('DELETE', '/foods/:id', deleteFoodDlg);
api.path('PUT', '/foods/:id', putFood);
api.path('GET', '/meals', getMealsDlg);
api.path('POST', '/meals', postMealDlg);
api.path('GET', '/mealPreps', getMealPrepsDlg);
api.path('POST', '/mealPreps', postMealPrepDlg);
api.path('DELETE', '/mealPreps/:id', deleteMealPrep);
api.path('GET', '/mealPreps/:id', getMealPrep);
api.path('PUT', '/mealPreps/:id', putMealPrep);
api.path('GET', '/goal', getGoal);
api.path('POST', '/goal', postGoal);
api.path('PUT', '/goal/:id', putGoal);
api.path('GET', '/categories', getCategories);

// Statistical APIs
api.path('GET', '/stats/caloriesPerDay', getCaloriesPerDay);
api.path('GET', '/stats/caloriesPerWeek', getCaloriesPerWeek);

api.listen();
