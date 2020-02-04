Highcharts.chart('container4', {
    chart: {
        type: 'boxplot'
    },
    title: {
        text: 'VisitTedresource'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['Low', 'Medium', 'High'],
        title: {
            text: 'Experiment No.'
        }
    },
    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
                value: 65,
                color: 'blue',
                width: 1,
                label: {
                    text: 'mean: 65',
                    align: 'space-around',
                    style: {
                        color: 'black'
                    }
                }
            }]
    },
    series: [{
            name: 'Observations',
            data: [
                [0, 7.5, 11, 23, 46.25],
                [0, 36.5, 71.5, 82.5, 100],
                [41.75, 71, 84, 90.5, 100]

            ],
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [// x, y positions where 0 is the first category
                [0, 50],
                [0, 50],
                [0, 51],
                [0, 51],
                [0, 52],
                [0, 60],
                [0, 60],
                [0, 61],
                [0, 62],
                [0, 65],
                [0, 70],
                [0, 72],
                [0, 74],
                [0, 76],
                [0, 90],
                [2, 4],
                [2, 6],
                [2, 12],
                [2, 17],
                [2, 20],
                [2, 21],
                [2, 29],
                [2, 31],
            ],
            marker: {
                fillColor: 'red',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]
});