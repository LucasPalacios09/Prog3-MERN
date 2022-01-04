const express = require('express');
const usermodel = require('../models/usermodel');
const router = express.Router();
const usersmodel = require('../models/usermodel')

router.get('/user', async (req, res)=>{

    const users = await usersmodel.find();
    console.log(users);
    res.json(users);
});

router.get('/user/:id', async (req, res)=>{
    const user = await usermodel.findById(req.params.id)
    res.json(user);
});

router.post('/user', async (req, res)=>{
    const {username, password, avatar, score} = req.body;
    const user = new usersmodel({username, password, avatar, score});
    await user.save();
    res.json({status: 'User saved'});
});

router.put('/user/:id', async (req, res)=>{
    const {username, password, avatar, score} = req.body;
    const newUser = {username, password, avatar, score};
    await usermodel.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User updated'})
});

router.delete('/user/:id', async (req, res)=>{
    await usermodel.findByIdAndRemove(req.params.id);
    res.json({status: "User deleted"})
});

module.exports = router;