const express = require('express');
const router = express.Router();


router.get('/users', (req, res) => {
    return res.json([{
        "lastName": "Mandava",
        "firstName": "Sandeep"
    }])
});

module.exports = router;