const { Router } = require("express");
const express = require("express");

const userSchema = require("../models/user");

const router = express.Router();

// create user

router.post("/users", (req, res)=>{
    const user = userSchema(req.body);
    user.save().then((dato) => res.json(dato)).catch((error) => res.json({message: error}))
});

// get all users

router.get("/users", (req, res)=>{
    userSchema.find().then((dato) => res.json(dato)).catch((error) => res.json({message: error}))
});


// get a user

router.get("/users/:id", (req, res)=>{
    const { id } = req.params;
    userSchema.findById(id).then((dato) => res.json(dato)).catch((error) => res.json({message: error}))
});


// get a user

router.put("/users/:id", (req, res)=>{
    const { id } = req.params;
    const {name, age, email} = req.body;
    userSchema.updateOne({_id: id}, {$set: {name, age, email}}).then((dato) => res.json(dato)).catch((error) => res.json({message: error}))
});

// delete a user

router.delete("/users/:id", (req, res)=>{
    const { id } = req.params;
   
    userSchema.remove({_id: id}).then((dato) => res.json(dato)).catch((error) => res.json({message: error}))
});

module.exports = router;
