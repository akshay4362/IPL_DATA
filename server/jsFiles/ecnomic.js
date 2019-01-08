module.exports = {
    ecnomicbowler: function (matches, deliveries) {
        var idArray_year = [];
        var idArray_year = matches.filter(obj => obj.season == 2015).map(row => row.id);
        const match_id = deliveries.filter(row => idArray_year.includes(row["match_id"]))
        var bowler_info = match_id.reduce((economy, delivery) => {
            economy[delivery.bowler] = (economy[delivery.bowler] || {});
            economy[delivery.bowler]["total_runs"] = (economy[delivery.bowler]['total_runs'] || 0) + parseInt(delivery.total_runs);
            economy[delivery.bowler]["ball_count"] = (economy[delivery.bowler]["ball_count"] || 0) + 1;
            return economy;
        }, {})
        // console.log(teamname)
        // console.log(bowler_info)
        // let obj = {}
        // for (let i in bowler_info) {
        //     // console.log(i)
        //     obj[i] = (obj[i] || ((bowler_info[i]["total_runs"] / bowler_info[i]["ball_count"]) * 6))

        // //   console.log(obj[)
        // }
        // teamName = teamname.filter((x, i, a) => a.indexOf(x) == i);
        let obj = Object.entries(bowler_info).reduce((acc, cur) => {
            acc[cur[0]] = (acc[cur[0]] || ((cur[1]["total_runs"] / cur[1]["ball_count"]) * 6).toFixed(2))
            return acc
        }, {})
        
        let sortedList = Object.entries(obj).map(element => {
            return [element[0], parseFloat(element[1])]
        }).sort((a, b) => {
            if (a[1] === b[1]) {
                return 0;
            } else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }).slice(0, 5);
        // console.log(sortedList)
        //  return sortedList
        let economy = sortedList.reduce((bowlr, cur) => {
          //  bowlr[cur[0]] = bowlr[cur[0]] || {}
            bowlr[cur[0]] = cur[1]
            return bowlr
        }, {})
        console.log(economy)
        return economy

    }

}