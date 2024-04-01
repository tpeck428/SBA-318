const express = require('express');
const router = express.Router();
const users = require('../data/users');

//Base user page routes 
router
    .route("/")
    .get((req, res) => {
        res.json(users);
    })

//Pulls Individual IDs
router
    .route("/:id")
    .get((req, res) => {
        const user = users.find((u) => u.id == req.params.id);
        if (user) {
            res.json(user);
        } else res.status(404).json({error: "User not found"})
    });

module.exports = router;