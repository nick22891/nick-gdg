/**
 * Created by Nick on 01/10/16.
 */

var express = require('express'),
    Test = require('./test'),
    router = express.Router();

router.get('/tests', Test.getTests);
router.post('/test', Test.createTest);

module.exports = router;
