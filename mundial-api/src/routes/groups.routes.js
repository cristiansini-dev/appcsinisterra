const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/groups.controller');

router.get('/', ctrl.getAllGroups);
router.get('/:group', ctrl.getGroupByName);

module.exports = router;
