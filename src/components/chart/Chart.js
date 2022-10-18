import React from "react";
import "./Chart.css";
import Chartbar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((datapoint) => datapoint.value);

  const totalMaxmimum = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={+dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxmimum}
          label={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
