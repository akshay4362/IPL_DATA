module.exports = {
    ecnomicbowler: function (matches, deliveries) {
        var idArray_year = [];
        var idArray_year = matches.filter(obj => obj.season == 2015).map(row => row.id)
        var match_id = deliveries
            .filter(id => idArray_year.includes(id['match_id']))
        var bowlers_given_runs = match_id.reduce(function (match, runs) {
            match[runs['bowler']] = (match[runs['bowler']] || 0) + (parseInt(runs['total_runs']) - parseInt(runs['extra_runs']))
            return match;
        }, {});
        var total_runs = match_id.reduce(function (bowler, run) {
            bowler[run['bowler']] = (bowler[run['bowler']] || 0) + 1;
            return bowler;
        }, {});
        for (var key in bowlers_given_runs) {
            bowlers_given_runs[key] = (bowlers_given_runs[key] / (total_runs[key] / 6)).toFixed(2);
        }
        var bowlersArr = [];
        for (economy in bowlers_given_runs) {
            bowlersArr.push([economy, parseFloat(bowlers_given_runs[economy])]);
        }
        // bowlersArr=bowlers_given_runs.filter(economy=>{ economy.push([economy, parseFloat(bowlers_given_runs[economy])])})

        bowlersArr.sort(function (bowlersEconomyData1, bowlersEconomyData2) {

            return bowlersEconomyData1[1] - bowlersEconomyData2[1];
        });
        return bowlersArr.slice(0, 5);
    }
}