/**
 * Created by Nick on 02/10/16.
 */

var express = require('express'),
    Goal = require('./goal'),
    router = express.Router();

router.get('/goals', Goal.getGoals);
router.post('/goal', Goal.createGoal);

module.exports = router;
