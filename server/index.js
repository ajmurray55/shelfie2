require("dotenv").config();
const massive = require("massive");
const express = require("express");
const ctrl = require('./controller')


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

app.get('/api/inventory', ctrl.getInventory);
app.get('/api/inventory/:id', ctrl.getOne);
// app.put('/api/inventory/:id', ctrl.update);
app.post('/api/inventory', ctrl.createInventory);
// app.delete('/api/inventory/:id', ctrl.delete);



app.listen(SERVER_PORT, () =>
console.log(`Your are on SERVER PORT ${SERVER_PORT}`)
);