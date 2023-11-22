const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');


router.use('/search', siteController.search);
router.use('/', siteController.index); //newsController.index là funciton index trong NewsController


module.exports = router;