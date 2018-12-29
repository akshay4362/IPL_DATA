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
            var year = Object.keys(json.year);
            var teamName = Object.keys(json.wonOverYear)
            var win = Object.values(json.wonOverYear)
            var array = {}
            for (let x in teamName) {
                array.push({
                    name: teamName[x],
                    data: win[x]
                })
            }
            // console.log(array)
            // draw chart
            $('div').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Stacked column chart'
                },
                xAxis: {
                    categories: year
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
                series: win
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
            var extrarun = Object.values(json);
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
                    data: extrarun
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