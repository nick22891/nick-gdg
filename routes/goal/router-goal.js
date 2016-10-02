/**
 * Created by Nick on 02/10/16.
 */

var express = require('express'),
    Goal = require('./goal'),
    router = express.Router();

router.get('/goals', Goal.getGoals);
router.get('/goal/:id', Goal.getGoal);
router.post('/goal', Goal.createGoal);
router.put('/goal/:id', Goal.updateGoal);

module.exports = router;
