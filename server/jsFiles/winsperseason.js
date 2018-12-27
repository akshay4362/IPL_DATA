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
    }
}