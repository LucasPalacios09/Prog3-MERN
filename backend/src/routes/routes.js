const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello World')
})

router.get('/getall', (req, res)=>{
    res.send('<div style="color:red; background-color: black; max-width: 80px">GET ALL</div>')
})

module.exports = router;