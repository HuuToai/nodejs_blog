const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');


router.use('/:slug', newsController.show);
router.use('/', newsController.index); //newsController.index là funciton index trong NewsController


module.exports = router;