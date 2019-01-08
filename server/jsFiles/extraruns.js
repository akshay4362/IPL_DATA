module.exports = {
    extrarunsin2016: function (matches, deliveries) {
        var idArray = matches.filter(obj => obj.season == 2016).map(row => row.id)
        // console.log(idArray)
        var extra_runs_in2016 = deliveries.reduce(function (season, deliveriy) {
            // console.log(season) 
            if (idArray.includes(deliveriy['match_id']))
            {
                season[deliveriy['bowling_team']] = (season[deliveriy['bowling_team']] || 0) + parseInt(deliveriy['extra_runs']);
            }
            // console.log(season) 
            return season;
        }, {});
        return extra_runs_in2016;

    }
}