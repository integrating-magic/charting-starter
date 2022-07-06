import ApexCharts from "apexcharts";
import { setChartSpecificOptions, handleClick } from "./utils";

window.loadChart = function (json) {
  const obj = JSON.parse(json);
  const { series, type, callback } = obj;

  //GLOBAL OPTIONS!!!!
  const options = {
    colors: ["#026E81", "#0099DD", "#FF9933"],
    stroke: {
      curve: "smooth",
      width: 1,
      dashArray: 5,
    },
    // grid: { show: false },
    markers: { size: 9 },
    chart: {
      type: type,
      zoom: { enabled: false },
      // height: 700,
      // stacked: true,
      events: {
        click: function (event, chartContext, config) {
          console.log("config");
          handleClick(config, series);
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

  const chart = new ApexCharts(document.querySelector("#chart"), {
    ...options,
    ...setChartSpecificOptions(dataXYOptions, type, series),
  });

  chart.render();
};
