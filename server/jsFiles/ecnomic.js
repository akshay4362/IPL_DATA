module.exports = {
    get: function (deliveries) {
        let totalRunsAndBalls = {};
        deliveries.forEach(row => {
            if (!totalRunsAndBalls[row.bowler]) {
                totalRunsAndBalls[row.bowler] = {};
                totalRunsAndBalls[row.bowler]['runs_conceded'] = parseInt(row.total_runs);
                totalRunsAndBalls[row.bowler]['balls_bowled'] = 1;
            } else {
                totalRunsAndBalls[row.bowler]['runs_conceded'] += parseInt(row.total_runs);
                totalRunsAndBalls[row.bowler]['balls_bowled']++;

            }
        });
        let bowlerAndEconomy = {};
        for (let i in totalRunsAndBalls) {
            if (totalRunsAndBalls[i]) {
                bowlerAndEconomy[i] = (totalRunsAndBalls[i].runs_conceded / totalRunsAndBalls[i].balls_bowled) * 6;
            }
        }
        var sortable = Object.entries(bowlerAndEconomy);
        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });
        let topEconomicBolwers = {};
        let topEconomicArray = (sortable.slice(0, 5));
        for (let i in topEconomicArray) {
       topEconomicBolwers[topEconomicArray[i][0]] = topEconomicArray[i][1].toFixed(2);
        }
        for(let i in topEconomicBolwers)
        topEconomicBolwers[i] = parseInt(topEconomicBolwers[i])
        return topEconomicBolwers
    }
}