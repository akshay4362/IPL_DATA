var express = require("express")
var app = express()
var cors = require('cors')
const matches = require('../matches.json')
// const deliveries = require('./deliveries.json')
var numOfMatchesPlayed = require('../server/totalmatchesplayed')
var matchesperseason =require('../server/winsperseason')
// var extraruns2016 = require('server/totalmatchesplayed.js')
const port = 3000;
app.use(cors());
// app.use(express.static(__dirname+'/index'))

app.get('/numofmatchesplayed', (req, res) => res.send(numOfMatchesPlayed.get(matches)));
// console.log(extraruns2016.extraRuns(matches, deliveries))
// console.log(matchesperseason.get(matches))
app.get('/matchesperseason', (req, res) => res.send(matchesperseason.get(matches)));
//app.get('/extraruns2016',(req,res) =>res.send(extraruns2016.get(matches,deliveries)));
app.listen(port, () => console.log(`Example app listening on port  ${port}`))
