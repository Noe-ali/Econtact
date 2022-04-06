// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Marzo 26", "Marzo 27", "Marzo 28", "Marzo 20", "Marzo 30", "Marzo 31", "Abril 2", "Abril 3", "Abril 4", "Abril 5" , "Abril 6", "Abril 7", "Abril 8"],
    datasets: [{
      label: "Operaciones",
      lineTension: 0.3,
      backgroundColor: "rgba(216,134,116,0.2)",
      borderColor: "rgba(216,134,116,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(216,134,116,1)",
      pointBorderColor: "rgba(216,134,116,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [1000, 3016, 2623, 1894, 1887, 2862, 3127, 3325, 2584, 2415, 3265, 3198, 3845],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 4000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


