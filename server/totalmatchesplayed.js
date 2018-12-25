module.exports = {
    get: function (matches) {
 
        let numofMatchesPlayedByTeams = {}
 
        matches.forEach(row => {
            if (!numofMatchesPlayedByTeams[row.season]) {
                numofMatchesPlayedByTeams[row.season] = 1;
            } else {
                numofMatchesPlayedByTeams[row.season]++;
            }
        })
 
        return numofMatchesPlayedByTeams;
    }
 }