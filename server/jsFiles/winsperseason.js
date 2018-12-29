module.exports = {
    matchesperseason: function (matches) {
        var teamName = []
        var year;
  
        let temp = matches.reduce(function (result, row) {
            result[row.winner] = 0;
            teamName.push(row.winner);
            return result;
        }, {})
        var wonTeams = matches.reduce((wonTeams, row) => {
            wonTeams[row.season] = (wonTeams[row.season] || { ...temp

            });
                     wonTeams[row.season][row.winner] += 1;
            // teamName.push(row.winner);
            return(wonTeams);

        }, {});
         
         
        // console.log(wonTeams);

        var wonOverYear = {};
        teamName = teamName.filter((x, i, a) => a.indexOf(x) == i);
        for (let i in wonTeams) {
            teamName.map((name) => {
                if (name !== '') {
                    wonOverYear[name] = (wonOverYear[name] || []);
                    wonOverYear[name].push(wonTeams[i][name]);
                    // if (wonTeams[i].hasOwnProperty(name))
                    //     wonOverYear[name].push(wonTeams[i][name]);
                    // else
                    //     wonOverYear[name].push(0);
                }

            })
         
       
        }

        // var year = Object.keys(wonTeams);
        return (wonOverYear)

    }

}