const express = require ("express");

const mongodb = require("./DB/database")
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5500;

// Some basic Middleware
app.use(bodyParser.json()); // To parse request bodies
app.use("/", require("./Routes/index"));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`App is listening to port : ${port}`);
        });
    }
});