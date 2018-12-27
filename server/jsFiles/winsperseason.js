module.exports = {
    get: function (matches) {
        let winnersTeam = {}

        matches.forEach((Object) => {

            if (winnersTeam[Object.season] == undefined) {
                winnersTeam[Object.season] = {};
            }
            if (winnersTeam[Object.season][Object.winner] == undefined) {
                winnersTeam[Object.season][Object.winner] = 1
            } else {
                ++winnersTeam[Object.season][Object.winner]
            }

        });
        return winnersTeam;

        // let ar = (Object.values(winnersTeam)).map((element) => Object.keys((element)));
        // let teams = [];
        // teams = ar.reduce((result, arr) => {
        //     arr.map(item => result.push(item))
        //     return result
        // }, [])
        // teams = teams.filter((element, index, arr) => arr.indexOf(element) == index)
        // let seriesData = [];
        // for (let team of teams) {
        //     let teamWonMatches = {};
        //     teamWonMatches.name = team;
        //     let wonMatches = [];
        //     for (let year of Object.keys(winnersTeam)) {
        //         if (!winnersTeam[year].hasOwnProperty([team])) {
        //             wonMatches.push(0);
        //         } else {
        //             wonMatches.push(winnersTeam[year][team]);
        //         }
        //     }
        //     teamWonMatches.winnersTeam = wonMatches;
        //     seriesData.push(teamWonMatches);
        // }
        // return seriesData

    }
}