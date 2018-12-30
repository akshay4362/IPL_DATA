module.exports = {
    ecnomicbowler: function (matches, deliveries) {
        var idArray_year = [];
        var idArray_year = matches.filter(obj => obj.season == 2015).map(row => row.id);
        //console.log(idArray_year);
        //var match_id = deliveries.filter(id => idArray_year.includes(id['match_id']))
        var match_id = idArray_year.map(id => {
            return deliveries.filter( (row)=> id==row["match_id"])
        })
        match_id=match_id[0];
        var bowler_info=match_id.reduce((acc,cur)=>{
            acc[cur.bowler]=(acc[cur.bowler] || {} );
            acc[cur.bowler]["total_runs"]=( acc[cur.bowler][cur.total_runs] || cur.total_runs)+cur.total_runs;
            acc[cur.bowler]["ball_count"]=( acc[cur.bowler]["ball_count"] || 1)+1;
            return acc;
        },{})
        var obj={}
        for(let i  in bowler_info){
            obj[i]=(obj[i] || ((bowler_info[i]["total_runs"]/bowler_info[i]["ball_count"])*6))
        }
        // var bowlersArr = [];
        // for (economy in bowlers_given_runs) {
        //     bowlersArr.push([economy, parseFloat(bowlers_given_runs[economy])]);
        // }
        // // bowlersArr=bowlers_given_runs.filter(economy=> economy.push([economy, parseFloat(bowlers_given_runs[economy])]))

        // bowlersArr.sort(function (bowlersEconomyData1, bowlersEconomyData2) {

        //     return bowlersEconomyData1[1] - bowlersEconomyData2[1];
        // });
     //return bowlersArr.slice(0, 5);
     return obj;
    }
}