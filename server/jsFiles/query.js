var SqlQuery = require('./mysql');
module.exports = {
    numberOfMatchesPlayed: function () {
        return new Promise((resolve, reject) => {
            SqlQuery('SELECT season,count(season) as number FROM matches group by season;')
                .then(function (row) {
                    var totalMatches = row.reduce((totalMatches, row) => {
                        totalMatches[row.season] = (totalMatches[row.season] || row.number);
                        return totalMatches;
                    }, {})
                    resolve(totalMatches)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    },


    matchesperseason: function () {
        return new Promise((resolve, reject) => {
            SqlQuery('SELECT season,winner FROM matches;')
                .then(function (wonTeamsData) {
                    var teamName = []
                    let temp = wonTeamsData.reduce(function (result, row) {
                        result[row.winner] = 0;
                        teamName.push(row.winner);
                        return result;
                    }, {})
                    var wonTeams = wonTeamsData.reduce((wonTeams, row) => {
                        wonTeams[row.season] = (wonTeams[row.season] || { ...temp
                        });
                        wonTeams[row.season][row.winner] += 1;
                        // teamName.push(row.winner);
                        return wonTeams;
                    }, {});
                    //console.log(wonTeams)
                    var wonTeamsarr = {};
                    teamName = teamName.filter((x, i, a) => a.indexOf(x) == i);
                    for (let i in wonTeams) {
                        teamName.map((name) => {
                            if (name !== '') {
                                wonTeamsarr[name] = (wonTeamsarr[name] || []);
                                wonTeamsarr[name].push(wonTeams[i][name]);
                                // if (wonTeams[i].hasOwnProperty(name))
                                //     wonTeamsarr[name].push(wonTeams[i][name]);
                                // else
                                //     wonTeamsarr[name].push(0);
                            }
                        })
                    }
                    var year = Object.keys(wonTeams)
                    resolve({
                        year,
                        wonTeamsarr
                    });
                    //resolve(wonTeams)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    },

    ecnomicbowler: function () {
        return new Promise((resolve, reject) => {
            SqlQuery('SELECT d.bowler,sum(d.total_runs) as total_runs,count(bowler) as ball_count FROM deliveries d, matches m WHERE m.season=2015 AND m.id=d.match_id group by d.bowler;')
                .then(function (bowlerInfo) {
                    var numberOfPlayers = 5;
                    var bowlerEconomy = bowlerInfo.reduce((bowlerEconomy, row) => {
                        bowlerEconomy[row.bowler] = (parseInt(row.total_runs) / parseInt(row.ball_count)) * 6
                        return bowlerEconomy;
                    }, {});
                    let entries = Object.entries(bowlerEconomy);
                    let sortedList = entries.sort((a, b) => a[1] - b[1]).splice(0, numberOfPlayers);
                    var bowlerName = [],
                        bowler_economy = [];
                    sortedList.map(row => {
                        bowlerName.push(row[0])
                        bowler_economy.push(row[1])
                    });
                    resolve({
                        bowlerName,
                        bowler_economy
                    });
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    },

    extraunsin2016: function () {
        return new Promise((resolve, reject) => {
            SqlQuery('SELECT d.bowling_team,sum(d.extra_runs) as extraRuns FROM matches m, deliveries d  WHERE m.season=2016 AND m.id = d.match_id group by d.bowling_team;')
                .then(function (bowlingTeam_extraRuns) {
                    var teamExtraRuns = bowlingTeam_extraRuns.reduce((teamExtraRuns, row) => {
                        teamExtraRuns[row.bowling_team] = (teamExtraRuns[row.bowling_team] || row.extraRuns);
                        return teamExtraRuns;
                    }, {})
                    resolve(teamExtraRuns);
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }
}