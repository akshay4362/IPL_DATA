var express = require("express")
var app = express()
var cors = require('cors')
var serveStatic = require('serve-static')

const matches = require('./jsonData/matches.json')
const deliveries = require('./jsonData/deliveries.json')
// var numOfMatchesPlayed = require('../server/totalmatchesplayed')
var numOfMatchesPlayed = require('./jsFiles/totalmatchesplayed')
var matchesperseason =require('./jsFiles/winsperseason')
var extrarunsin2016 = require('./jsFiles/extraruns')
var ecnomicbowler=require("./jsFiles/ecnomic")
const port = 3000;
app.use(cors());
app.use(express.static(__dirname +'/../client'))
// console.log(deliveries)
app.get('/numofmatchesplayed', (req, res) => res.send(numOfMatchesPlayed.get(matches)));
// console.log(numOfMatchesPlayed.get(matches))
// console.log(matchesperseason.get(matches))
app.get('/matchesperseason', (req, res) => res.send(matchesperseason.get(matches)));
app.get('/extrarunsin2016',(req,res) =>res.send(extrarunsin2016.get(matches,deliveries)));
// console.log(extrarunsin2016.get(matches, deliveries))
app.get('/ecnomicbowler', (req, res) => res.send(ecnomicbowler.get(deliveries)));
app.listen(port, () => console.log(`Example app listening on port  ${port}`))
