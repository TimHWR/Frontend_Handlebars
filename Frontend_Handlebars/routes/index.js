'use strict';
var express = require('express');
var router = express.Router();
var dbh = require('./databaseHandler');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'MuWI' });
    dbh.sql("Select * FROM tcontent", function (data) {
        console.log(data);
    });
});

router.get('/Kontakt', function (req, res) {
    res.render('Kontakt');
});

router.get('/Dozenten/Lemke', function (req, res) {
    res.render('Dozenten/Lemke');
});

module.exports = router;
