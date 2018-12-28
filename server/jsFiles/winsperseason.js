module.exports = {
    get : function (matches) {
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

    }
}