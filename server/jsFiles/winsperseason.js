module.exports = {
    get: function (matches) {
        let winnersTeam = {};
        matches.forEach((obj) => {
            if (winnersTeam[obj.season] == undefined) {
                winnersTeam[obj.season] = {};
            }
            if (winnersTeam[obj.season][obj.winner] == undefined) {
                winnersTeam[obj.season][obj.winner] = 1;
            } else {
                winnersTeam[obj.season][obj.winner] += 1;
            }

        })
        return winnersTeam;

        // let ar = (Object.values(winnersTeam)).map((element) => element.keys((element)));
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
        //     for (let year of Object.keys(data)) {
        //         if (!data[year].hasOwnProperty([team])) {
        //             wonMatches.push(0);
        //         } else {
        //             wonMatches.push(data[year][team]);
        //         }
        //     }
        //     teamWonMatches.data = wonMatches;
        //     seriesData.push(teamWonMatches);
        // }

        // return seriesData
    }
}