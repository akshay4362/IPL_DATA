totalmatches()

function totalmatches() {
    // console.log("helo");
    fetch('http://127.0.0.1:3000/numberOfMatchesplayed')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            var year = Object.keys(json);
            var val = Object.values(json);
            // draw chart

            $('div').highcharts({
                chart: {
                    type: "bar"
                },
                title: {
                    text: "IPL Matches"
                },
                xAxis: {
                    categories: year,
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
                    data: val
                }]
            });
        });
}

// fetch("http://localhost:3000").then(response => response.text()).then(data => $('div').text(data))
function matchesperseasonplayed() {
    fetch('http://127.0.0.1:3000/matchesperseason')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            let ar = (Object.values(json)).map((element) => Object.keys((element)));
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
                for (let year of Object.keys(json)) {
                    if (!json[year].hasOwnProperty([team])) {
                        wonMatches.push(0);
                    } else {
                        wonMatches.push(json[year][team]);
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
                    categories: Object.keys(json)
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

        });

}

function extrarunsin2016() {
    fetch('http://127.0.0.1:3000/extrarunsin2016')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            var teams = Object.keys(json);
            var extraruns = Object.values(json);
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

        });
}

function ecnomicbowler() {
    fetch('http://127.0.0.1:3000/ecnomicbowler')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            var bowler = Object.keys(json);
            var ecnomy = Object.values(json);
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
                    data: ecnomy
                }]
            });

        })
}