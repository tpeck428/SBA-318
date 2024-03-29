const express = require('express');
const app = express();
const PORT = 4000;

//Importing data
const users = require('./data/users');
const items = require('./data/inventory');

//Template engine
const fs = require('fs');

//Set views and view engine
app.set('views', './views')
app.set('view engine', 'dice')

//Define template engine --come back to this
app.engine('dice', (filePath, options, callback) => {
    fs.readFile(filePath, (e, content) => {
        if (e) return callback (e);

    })
})

// //MIDDLEWARE
// app.use("/dice/users", users);
// app.use("/dice/inventory", items);

//ROUTES
// const userRouter = require


//Root Route
app.get("/", (req, res) => {
    res.send('Can you see me?')
})

//Routes
// app.get('/dice/users'), (req, res)=> {
//     res.json(users);
    
// }



app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})