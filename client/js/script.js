totalmatches()

function totalmatches() {
    $.ajax({
        url: "http://localhost:3000/numofmatchesplayed", // the local Node server
        //method: 'GET',
        success: function (data) {
            console.log(data)
            let years = Object.keys(data)
            let matches = Object.values(data)
            // draw chart
            $('div').highcharts({
                chart: {
                    type: "bar"
                },
                title: {
                    text: "IPL Matches"
                },
                xAxis: {
                    categories: years,
                    type: 'category',
                    allowDecimals: false,
                    title: {
                        text: "Years"
                    }
                },
                yAxis: {
                    title: {
                        text: "matches"
                    }
                },
                series: [{
                    name: 'Total matches',
                    data: matches
                }]
            });
        }
    })
}

// fetch("http://localhost:3000").then(response => response.text()).then(data => $('div').text(data))
function matchesperseasonplayed() {
    $.ajax({
        url: "http://localhost:3000/matchesperseason", // the local Node server
        //method: 'GET',
        success: function (data) {
            console.log(data)
            let ar = (Object.values(data)).map((element) => Object.keys((element)));
            let teams = [];
            teams = ar.reduce((result, arr) => {
                arr.map(item => result.push(item))
                return result
            }, [])
            teams = teams.filter((element, index, arr) => arr.indexOf(element) == index)
            let seriesData = [];
            for (let team of teams) {
                let teamWonMatches = {};
                teamWonMatches.name = team;
                let wonMatches = [];
                for (let year of Object.keys(data)) {
                    if (!data[year].hasOwnProperty([team])) {
                        wonMatches.push(0);
                    } else {
                        wonMatches.push(data[year][team]);
                    }
                }
                teamWonMatches.data = wonMatches;
                seriesData.push(teamWonMatches);
            }
            // console.log(Object.keys(data));
            // draw chart
            $('div').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Stacked column chart'
                },
                xAxis: {
                    categories: Object.keys(data)
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) ||
                                'gray'
                        }
                    }
                },
                legend: {
                    align: 'right',
                    x: -30,
                    verticalAlign: 'top',
                    y: 25,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) ||
                        'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    shadow: false
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) ||
                                'white'
                        }
                    }
                },
                series: seriesData

            });
        }
    })

}

function extrarunsin2016() {
    $.ajax({
        url: "http://localhost:3000/extrarunsin2016", // the local Node server
        //method: 'GET',
        success: function (data) {
            console.log(data)
            let teams = Object.keys(data)
            let extraruns = Object.values(data)
            // draw chart
            $('div').highcharts({
                chart: {
                    type: "column"
                },
                title: {
                    text: "IPL Matches"
                },
                xAxis: {
                    categories: teams,
                    type: 'category',
                    allowDecimals: false,
                    title: {
                        text: "Team Name"
                    }
                },
                yAxis: {
                    title: {
                        text: "matches"
                    }
                },
                series: [{
                    name: 'total ExtraRuns',
                    data: extraruns
                }]
            });
        }
    })
}



function ecnomicbowler() {
    $.ajax({
        url: "http://localhost:3000/ecnomicbowler", // the local Node server
        //method: 'GET',
        success: function (data) {
            console.log(data)
            let bowler = Object.keys(data)
            let economy = Object.values(data)
            // draw chart
            $('div').highcharts({
                chart: {
                    type: "bar"
                },
                title: {
                    text: "IPL Matches"
                },
                xAxis: {
                    categories: bowler,
                    type: 'category',
                    allowDecimals: false,
                    title: {
                        text: "bowler name"
                    }
                },
                yAxis: {
                    title: {
                        text: "Top Economy"
                    }
                },
                series: [{
                    name: 'top economic bowler',
                    data: economy
                }]
            });
        }
    })
}