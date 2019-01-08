module.exports = {
    matchesperseason: function (matches) {
        var teamName = new Set()

        let temp = matches.reduce(function (result, row) {
            result[row.winner] = 0
            return result;
        }, {})
        var wonTeams = matches.reduce((wonTeam, row) => {
            wonTeam[row.season] = (wonTeam[row.season] || { ...temp
            });
            wonTeam[row.season][row.winner] += 1;
            row.winner !== "" ? teamName.add(row.winner) : null
            return (wonTeam);
        }, {});
        // // script
        var wonOverYear = Object.keys(wonTeams).reduce((year, winners) => {
            [...teamName].map((name) => {
                year[name] = year[name] || [];
                year[name].push(wonTeams[winners][name]);
            })
            return year
        }, {})
        // console.log(wonOverYear);
        var finalObject = {};
        finalObject.year = Object.keys(wonTeams)
        finalObject.wonTeamsarr = wonOverYear;
        return finalObject;
    }

}