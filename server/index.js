require("dotenv").config();
const massive = require("massive");
const express = require("express");


const app = express();

app.use(express.json());

const {SERVER_PORT, CONNECTION_STRING} = process.env;
// console.log(SERVER_PORT)
// console.log(CONNECTION_STRING)
massive(CONNECTION_STRING)
.then(db => {
    app.set("db", db);
    console.log("connected to db")
})
.catch(err => console.log(err));



app.listen(SERVER_PORT, () =>
console.log(`Yor are on SERVER PORT ${SERVER_PORT}`)
);