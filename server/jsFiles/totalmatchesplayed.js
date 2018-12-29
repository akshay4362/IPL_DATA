module.exports = {
    numOfMatchesPlayed : function (matches) {
       var totalMatches = matches.reduce(function(win,win1){
            win[win1.season]=win[win1.season]+1 || 1
            return win
        },{})
        return (totalMatches)
        
    }
    
}
