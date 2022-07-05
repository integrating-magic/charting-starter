export const reconfigureForPieCharts = (data) => {
  const d = data[0].data;
  let series, labels;
  series = d.map((item) => item.y);
  labels = d.map((item) => item.x);
  return { series, labels };
};

export const setChartSpecificOptions = (dataXYOptions, type, series) => {
  const chartType = type === "pie" || type === "donut" || type === "radialBar";
  return chartType ? reconfigureForPieCharts(series) : dataXYOptions;
};

export const handleClick = (config, series) => {
  const seriesNames = series.map((item) => item.name);
  const xAxisNames = series.map((item) => item.data.map((item) => item.x));
  const dataPointIndex = config.dataPointIndex;
  const seriesIndex = config.seriesIndex;
  const category = xAxisNames[seriesIndex][dataPointIndex];
  const seriesName = seriesNames[seriesIndex];
  const obj = { category, seriesName };
  FileMaker.PerformScript("RetieveData", JSON.stringify(obj));
};

export const events = {
  events: {
    dataPointSelection: function (event, chartContext, config) {
      handleClick(config, series);
    },
  },
};
