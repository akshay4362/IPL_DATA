module.exports = {
    ecnomicbowler : function (matches,deliveries) {
        var idArray_year = [];
        var idArray_year = matches.filter(obj => obj.season == 2015).map(row => row.id)
        var arr1 = deliveries
            .filter(id => idArray_year.includes(id['match_id']))
        var arr2 = arr1.reduce(function (acc, cur) {
            acc[cur['bowler']] = (acc[cur['bowler']] || 0) + (parseInt(cur['total_runs']) - parseInt(cur['extra_runs']))
            return acc;
        }, {});
        var arr3 = arr1.reduce(function (acc, cur) {
            acc[cur['bowler']] = (acc[cur['bowler']] || 0) + 1;
            return acc;
        }, {});
        for (var key in arr2) {
            arr2[key] = (arr2[key] / (arr3[key] / 6)).toFixed(2);
        }

        var bowlersArr = [];
        for (economy in arr2) {
            bowlersArr.push([economy, parseFloat(arr2[economy])]);
        }
        bowlersArr.sort(function (bowlersEconomyData1, bowlersEconomyData2) {

            return bowlersEconomyData1[1] - bowlersEconomyData2[1];
        });
        return bowlersArr.slice(0, 5);


    }
}