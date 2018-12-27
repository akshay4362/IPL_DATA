module.exports = {
    get: function (matches) {
        
       var totalMatches = matches.reduce(function(acc,cur){
            acc[cur.season]=acc[cur.season]+1 || 1
            return acc


        },{})
        // return acc
        return (totalMatches)
    }
    
}
