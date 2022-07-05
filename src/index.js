import ApexCharts from "apexcharts";
import { setChartSpecificOptions, handleClick } from "./utils";

window.loadChart = function (json) {
  const obj = JSON.parse(json);
  const { series, type } = obj;

  //GLOBAL OPTIONS!!!!
  const options = {
    colors: ["#F44336", "#9C27B0"],
    chart: {
      type: type,
      stacked: true,
      events: {
        dataPointSelection: function (event, chartContext, config) {
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
