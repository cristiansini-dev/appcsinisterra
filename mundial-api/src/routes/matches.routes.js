const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/matches.controller');

// El orden importa: las rutas fijas van antes que /:id
router.get('/results', ctrl.getResults);
router.get('/upcoming', ctrl.getUpcoming);
router.get('/live', ctrl.getLive);
router.get('/', ctrl.getAllMatches);
router.get('/:id', ctrl.getMatchById);

module.exports = router;
