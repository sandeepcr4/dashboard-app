const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


router.get('/users', (req, res) => {
    return res.json([{
        "lastName": "Mandava",
        "firstName": "Sandeep"
    }])
});


router.get('/stock', (req, res) => {
    fs.readFile(path.join(__dirname, '../', 'data/stock.json'), 'utf8', function (err, data) {
      if (err) throw err;
      return res.json(JSON.parse(data));
    }); 
});

router.get('/gdp', (req, res) => {
    fs.readFile(path.join(__dirname, '../', 'data/gdp.json'), 'utf8', function (err, data) {
        if (err) throw err;
        return res.json(JSON.parse(data));
      });
});

module.exports = router;