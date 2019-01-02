var express = require("express")
var app = express()
var cors = require('cors')
const port = 3000;
const num = require("./jsFiles/query")
app.use(cors());

app.use(express.static(__dirname + '/../client'))

app.get('/numofmatchesPlayed', function (req, res) {
    num.numberOfMatchesPlayed()
        .then(data => res.json(data))
        .catch(err => res.send(err))
});

app.get('/matchesperseason', function (req, res) {
    num.matchesperseason()
        .then(data => res.json(data))
        .catch(err => res.send(err))
});
app.get('/extrarunsin2016', function (req, res) {
    num.extraunsin2016()
        .then(data => res.json(data))
        .catch(err => res.send(err))
});
// console.log(extrarunsin2016.get(matches, deliveries))
app.get('/ecnomicbowler', function (req, res) {
    num.ecnomicbowler()
        .then(data => res.json(data))
        .catch(err => res.send(err))
});
app.listen(port, () => console.log(`Example app listening on port  ${port}`))