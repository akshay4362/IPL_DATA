var express = require("express")
var app = express()
var cors = require('cors')
const matches = require('./jsonData/matches.json')
const deliveries = require('./jsonData/deliveries.json')
var numOfMatchesPlayed = require('./jsFiles/totalmatchesplayed')
var matchesperseason = require('./jsFiles/winsperseason')
var extrarunsin2016 = require('./jsFiles/extraruns')
var ecnomicbowler = require("./jsFiles/ecnomic")
const port = 3005;
app.use(cors());
app.use(express.static(__dirname + '/../client'))
app.get('/numberOfMatchesplayed', function (req, res) {
    res.send(numOfMatchesPlayed.numOfMatchesPlayed(matches))
})
app.get('/matchesperseason', function (req, res) {
    res.send(matchesperseason.matchesperseason(matches))
});
app.get('/extrarunsin2016', function (req, res) {
    res.send(extrarunsin2016.extrarunsin2016(matches, deliveries))
})
app.get('/ecnomicbowler', function (req, res) {
    res.send(ecnomicbowler.ecnomicbowler(matches, deliveries))
});
app.listen(port, () => console.log(`Example app listening on port  ${port}`))