module.exports = {
    numOfMatchesPlayed: function (matches) {
        var totalMatches = matches.reduce(function (season, year) {
            // console.log(season[year.season])
            season[year.season] = season[year.season] + 1 || 1
            
            return season
        },{})
        return (totalMatches)

    }

}
