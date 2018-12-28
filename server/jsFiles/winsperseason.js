module.exports = {
    matchesperseason : function (matches) {
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
            // console.log(Object.values(data))
        })
        return winnersTeam;


    }
}