var options = {
  series: [
    {
      name: 'Aktywni użytkownicy',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Ilość postów',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    foreColor: '#373d3f',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
