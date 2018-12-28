module.exports = {
        get: function (matches, deliveries) {

            // var idArray = [];
            // for (var i = 0; i <matches.length; i++) {
            //     if (matches[i].season == 2016) {
            //         idArray.push(matches[i].id);
            //     }
            // }
            var idArray = matches.filter(obj  => obj.season==2016).map(row=>row.id)
                  var arr = deliveries.reduce(function (id, id1) {
                    if (idArray.includes(id1['match_id'])) {
                        id[id1['batting_team']] = ((id[id1['batting_team']] || 0) + parseInt(id1['extra_runs']));
                    }
                    return id;
                }, {});
                return arr;

            }

        }