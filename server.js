const express = require('express');
const db = require("./db");
const Pizza = require('./models/pizzamodel');

const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.get("/", (req, res)=>{
    res.send("Server working");
});

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/user/', userRoute)

const port = process.env.PORT || 5000;

app.listen(port, ()=> {`server running on port ${port}`});