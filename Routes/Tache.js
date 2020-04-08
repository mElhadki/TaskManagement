var express = require('express');
const fs = require('fs');


//Recuperation d'un fichier Json

let rawdata = fs.readFileSync('./Data/Tache.json');
var data = JSON.parse(rawdata);
 
module.exports = (function () {
    var api = express.Router();
    api.route("/Tache").get(function (req, res) {
    
        res.send({
            request: true,
            data
        });
        res.end();

    });
    return api;
})();