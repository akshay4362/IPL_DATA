module.exports = {
    get: function (matches, deliveries) {

        let ids = [];
        let extraRuns = {}
        matches.forEach((obj) => {
            if (obj.season == 2016) {
                ids.push(obj.id);
            }

        })
        // console.log(ids)
        ids.forEach((elem) => {
            deliveries.forEach((obj) => {
                if (obj.match_id == elem) {
                    if (extraRuns.hasOwnProperty([obj.bowling_team])) {
                        let team = obj.bowling_team;
                        let extraruns = parseInt(obj.extra_runs);
                        extraRuns[team] += extraruns;
                    } else {
                        team = obj.bowling_team;
                        extraruns = parseInt(obj.extra_runs);
                        extraRuns[team] = extraruns;
                    }
                    // return console.log(extraRuns);
                    // if (extraRuns[obj2.bowling_team] == undefined) {
                    //     extraRuns[obj2.bowling_team][obj2.extra_runs] = {};
                    // }
                    // if (extraRuns[obj2.bowling_team][obj2.extra_runs] == undefined) {
                    //     extraRuns[obj2.bowling_team][obj2.extra_runs] = 1;
                    // }
                }
            })
        })


        return (extraRuns)

    }

}