const csv = require('csv-parser')
const fs = require('fs')
const matches = []
const deliveries = []
fs.createReadStream('server/matches.csv')
    .pipe(csv())
    .on('data', (data) => matches.push(data))
    .on('end', () => {
        fs.writeFileSync('matches.json', JSON.stringify(matches))
    })
fs.createReadStream('server/deliveries.csv')
    .pipe(csv())
    .on('data', (data) => deliveries.push(data))
    .on('end', () => {
        fs.writeFileSync('deliveries.json', JSON.stringify(deliveries))
    })