const express = require('express');
const router = express.Router();
const orders = require('../data/orders');


//Base user page routes 
router
    .route("/")
    .get((req, res) => {
        res.json(orders);
    })
    .post((req, res) => {
        // console.log(req.body)
        if (req.body.userId && req.body.item) {
            const orders = {
                id: orders[orders.length - 1].id + 1,
                userId: req.body.userId,
                item: req.body.item,
            };
            orders.push(orders);
            res.json(orders[orders.length - 1]);
        } else res.json({error: "Insufficient Data"})
    })
    

// //Pulls Individual IDs
// router
//     .route("/:id")
//     .get((req, res) => {
//         const user = users.find((u) => u.id == req.params.id);
//         if (user) {
//             res.json(user);
//         } else res.status(404).json({error: "User not found"})
//     })
//     //Using PATCH to make changes to users -- come back to this
//     .patch((req, res) => {
//         console.log('testing patch')
//         const user = users.find((u, i) => {
//             if (u.id == req.params.id) {
//                 for (const key in req.body) {
//                     users[i][key] = req.body[key];
//                 }
//                 return true;
//             }
//         });
//         if (user) res.json(user);
//     })

//     .delete((req, res, next) => {
//         const userDelete = users.find((u, i) => {
//             if (u.id == req.params.id) {
//                 users.splice(i, 1);
//                 return true;
//             }
//         });

//         if (userDelete) res.json(userDelete);
//         else next();
//     })
    





module.exports = router;