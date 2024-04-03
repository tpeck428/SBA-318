const express = require('express');
const app = express();
const PORT = 4000;

//Importing data
const users = require('./data/users');
const orders = require('./data/orders');


//Middleware
app.use(express.json());
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');




//Template engine
const fs = require('fs');


//Define template engine --come back to this
app.engine('dice', (filePath, options, callback) => {
    fs.readFile(filePath, (e, userForm) => {
        if (e) return callback (e);
        const rendered = userForm.toString()
        return callback(null, rendered)
    });
})

//Set views and view engine
app.set('views', './views')
app.set('view engine', 'dice')



//Route MIDDLEWARE
app.use("/users", usersRouter);
app.use("/orders", ordersRouter);



//Root Route
app.get("/", (req, res) => {
    // res.send('Can you see me?')
    const data = {
        title: "Gobblin' Dice",
        content: "Please use our form to introduce yourself and register your account!"
    }
    res.render('welcome', data) //not rendering data
})

//Routes
    // app.use((req, res, next) => {
    //     next(error(404, "Resource Not Found"));
    //   });

app
    .route("/users")
    .get((req, res,) => {
        res.json(users);
})
    .post((req, res) => {
        if (req.body.name && req.body.email && req.body.title) {
            if (users.find((e) => e.email == req.body.email )) {
                res.json({error: "This email has been used"});
                return;
            }
            const user = {
                id: users[users.length - 1].id + 1,
                name: req.body.name,
                email: req.body.email,
                title: req.body.title,
            };
            users.push(user);
            res.json(users[users.length - 1]);
        } else res.json({error: "Insufficient Data"})
    })
   



app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})