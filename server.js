const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 3000;
var opn= require('opn');
var routeLogin= require('./Routes/Login');
var routeTache=require('./Routes/Tache')
var routeAddTache=require('./Routes/AddTask')
var routeDeleteTache=require('./Routes/DeleteTache')
var routeUpdateTache=require('./Routes/UpdateTache')
// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))

// API'S

app.use(routeLogin);
app.use(routeTache);
app.use(routeAddTache);
app.use(routeDeleteTache);
app.use(routeUpdateTache);
app.listen(port, () => {console.log(`listening on port ${port}!`);
opn("http://localhost:3000/vue/login.html")
});