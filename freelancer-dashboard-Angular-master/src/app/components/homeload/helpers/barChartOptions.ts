import { color, Options } from 'highcharts';

export const barChartOptions: Options={
  // chart: {
  //   type: 'bar',
  // },
  // credits: {
  //   enabled: false,
  // },
  // title: {
  //   text: 'Tasks Progress',
  // },
  // yAxis: {
  //   visible: false,
  //   gridLineColor: '#fff',
  // },
  // legend: {
  //   enabled: false,
  // },
  // xAxis: {
  //   lineColor: '#fff',
  //   categories: [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ],
  // },

  // plotOptions: {
  //   series: {
  //     borderRadius: 5,
  //   } as any,
  // },

  // series: [
  //   {
  //     type: 'bar',
  //     color: '#506ef9',
  //     data: [
  //       { y: 20.9},
  //       { y: 71.5 },
  //       { y: 106.4 },
  //       { y: 129.2 },
  //       { y: 144.0, color: '#ffe8df' },
  //       { y: 176.0 },
  //       { y: 135.6 },
  //       { y: 148.5 },
  //       { y: 216.4, color: '#fc5185' },
  //       { y: 194.1 },
  //       { y: 95.6 },
  //       { y: 54.4 },
  //     ],
  //   },
  // ],
  chart: {
    type: 'column'
},
title: {
    text: 'Browser market shares. January, 2018'
},
subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
},
accessibility: {
    announceNewData: {
        enabled: true
    }
},
xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Total percent market share'
    }

},
legend: {
    enabled: false
},
plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
    }
},

tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
    {
        name: "Browsers",
        colorByPoint: true,
        type:"column",
        data: [
            {
                name: "",
                
                y: 20,
                drilldown: "Chrome"
            },
            {
                name: "Firefox",
                y: 70.57,
                drilldown: "Firefox"
            },
            {
                name: "Internet Explorer",
                y: 7.23,
                drilldown: "Internet Explorer"
            }
        
          
           
        ]
    }
],
drilldown: {
    series: [
        {
            name: "Chrome",
            id: "Chrome",
            type:"column",
            data: [
                [
                    "v65.0",
                    0.1
                ],
                [
                    "v64.0",
                    1.3
                ],
                [
                    "v63.0",
                    53.02
                ],
                [
                    "v62.0",
                    1.4
                ],
                [
                    "v61.0",
                    0.88
                ],
                [
                    "v60.0",
                    0.56
                ],
                [
                    "v59.0",
                    0.45
                ],
                [
                    "v58.0",
                    0.49
                ],
                [
                    "v57.0",
                    0.32
                ],
                [
                    "v56.0",
                    0.29
                ],
                [
                    "v55.0",
                    0.79
                ],
                [
                    "v54.0",
                    0.18
                ],
                [
                    "v51.0",
                    0.13
                ],
                [
                    "v49.0",
                    2.16
                ],
                [
                    "v48.0",
                    0.13
                ],
                [
                    "v47.0",
                    0.11
                ],
                [
                    "v43.0",
                    0.17
                ],
                [
                    "v29.0",
                    0.26
                ]
            ]
        },
        {
            name: "Firefox",
            id: "Firefox",
            type:"column",
            data: [
                [
                    "v58.0",
                    1.02
                ],
                [
                    "v57.0",
                    7.36
                ],
                [
                    "v56.0",
                    0.35
                ],
                [
                    "v55.0",
                    0.11
                ],
                [
                    "v54.0",
                    0.1
                ],
                [
                    "v52.0",
                    0.95
                ],
                [
                    "v51.0",
                    0.15
                ],
                [
                    "v50.0",
                    0.1
                ],
                [
                    "v48.0",
                    0.31
                ],
                [
                    "v47.0",
                    0.12
                ]
            ]
        },
       
        {
            name: "Safari",
            id: "Safari",
            type:"column",
            data: [
                [
                    "v11.0",
                    3.39
                ],
                [
                    "v10.1",
                    0.96
                ],
                [
                    "v10.0",
                    0.36
                ],
                [
                    "v9.1",
                    0.54
                ],
                [
                    "v9.0",
                    0.13
                ],
                [
                    "v5.1",
                    0.2
                ]
            ]
        }
       
    ]
    
}

}
