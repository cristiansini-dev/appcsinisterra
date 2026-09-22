const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/teams.controller');

router.get('/', ctrl.getAllTeams);
router.get('/:name/matches', ctrl.getTeamMatches);

module.exports = router;
