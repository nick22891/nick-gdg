/**
 * Created by Nick on 03/10/16.
 */

var express = require('express'),
    Project = require('./project'),
    router = express.Router();

router.get('/projects', Project.getProjects);
router.get('/project/:id', Project.getProject);
router.post('/project', Project.createProject);
//router.put('/project/:id', Project.updateProject);

module.exports = router;
