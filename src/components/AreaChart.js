import React from "react";
import ReactApexChart from "react-apexcharts";
import "./styles/AreaChart.css";

const AreaChart = ({isDark}) => {
  const chartOptions = {
    chart: {
      height: 280,
      type: "area",
      stacked: false,
      foreColor: '#57646f',
      toolbar: {
        show: false,
      },
          dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 3,
          left: 0,
          blur: 6,
          color: 'purple',
          opacity: 0.3
      },
      fontFamily: 'Roboto',
          animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      },
      
    },
    dataLabels: {
      enabled: false
    },
    theme: {
        mode: 'light', 
        palette: 'palette10', 
        monochrome: {
            enabled: false,
            color: '#A020F0',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },
    series: [
      {
        name: "High Temp",
        data: [23, 24, 22, 21, 23, 22, 24, 26]
      },
      {
        name: "Low Temp",
        data: [17, 15, 14, 13, 14, 15, 17, 18]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shade: `${isDark ? 'dark' : 'light'}`,
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.6,
      }
    },
    xaxis: {
      categories: [
        "00:00",
        "03:00",
        "06:00",
        "09:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00"
      ],
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        return (
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />' +
          '<div id="weather-temps" class="">' +
            '<p id="weather-temps-container" class="flex">'+
              '<span class="material-symbols-outlined text-[#A300D6] scale-[110%] -translate-x-1">expand_less</span>'+series[0][dataPointIndex]+' °C'+
            '</p>' +
            '<p id="weather-temps-container" class="flex">' +
              '<span class="material-symbols-outlined text-[#7D02EB] scale-[110%] -translate-x-1">expand_more</span>'+series[1][dataPointIndex]+' °C'+ 
            '</p>'+
          '</div>'
        );
      },
    },
    grid: {
      show: true,
      borderColor: '#d7d7d7',
      strokeDashArray: 10,
      position: 'back',
    },
    yaxis: {
      labels: {
          formatter: (value) => { return value+"°" },
      },
    }
  };
  
  
  return (
    <div id="areachartdiv" className="w-full">
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type="area"
      height={300}
    />
    </div>
  );
};

export default AreaChart;
    