import ApexCharts from "apexcharts";
import { setChartSpecificOptions, handleClick, saveImage } from "./utils";
let chart;
window.loadChart = function (json) {
  const obj = JSON.parse(json);
  const { series, type, callback } = obj;

  //GLOBAL OPTIONS!!!!

  const options = {
    colors: ["#F7DF1E", "#1D91B2"],
    // stroke: {
    //   curve: "smooth",
    //   width: 2,
    //   dashArray: 5,
    // },
    grid: { show: false },
    // plotOptions: {
    bar: { horizontal: true, dataLabels: { position: "bottom" } },
    // },
    // markers: { size: 3 },
    dataLabels: {
      enabled: true,
      background: { enabled: true, foreColor: "black" },
      // offsetX: 20,
    },
    // legend: {
    //   show: true,
    //   position: "left",
    //   horizontalAlign: "right",
    // },
    chart: {
      toolbar: { show: false },
      type: type,
      width: "100%",
      zoom: { enabled: false },
      height: 700,
      stacked: true,
      events: {
        click: function (event, chartContext, config) {
          console.log("config");
          handleClick(config, series, callback);
        },
      },
    },
    xaxis: {
      type: "category",
    },
  };
  //OPTIONS FOR XY Charts
  const dataXYOptions = {
    series: series,
    xaxis: {
      type: "category",
    },
  };

  chart = new ApexCharts(document.querySelector("#chart"), {
    ...options,
    ...setChartSpecificOptions(dataXYOptions, type, series),
  });

  chart.render();
};

//function to save the chart back to FIleMaker.
window.saveImage = saveImage;
