import React, { useState, useEffect } from "react";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLegend, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory";

function LineChart({ data, lines = [], title, legendWidth }) {
  const [chartWidth, setChartWidth] = useState(350);
  const [chartHeight, setChartHeight] = useState(350);

  const legends = [];

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth);
      setChartHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  lines.forEach(({ color, name }) => {
    legends.push({
      name: name,
      symbol: { fill: color, type: "minus" },
    });
  });

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={<VictoryZoomContainer responsive={true} zoomDimension="x" />}
        width={chartWidth}
        height={chartHeight}
      >
        <VictoryLabel text={title} x={(chartWidth - 35) / 2} y={20} textAnchor="middle" />
        {lines.map(({ color, x, y }, index) => (
          <VictoryLine
            key={index}
            data={data}
            interpolation="natural"
            sortOrder="descending"
            style={{
              data: { stroke: color, strokeWidth: 2 },
              parent: { border: "1px solid #ccc" },
            }}
            x={x}
            y={y}
          />
        ))}
        <VictoryLegend
          data={legends}
          gutter={20}
          orientation="horizontal"
          titleOrientation="bottom"
          x={(chartWidth - legendWidth) / 2}
          y={chartHeight - 25}
        />
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis
          dependentAxis
          fixLabelOverlap
          tickFormat={(t) => {
            if (t > Math.pow(10, 3) && t < Math.pow(10, 6)) return `${t / Math.pow(10, 3)}k`;
            else if (t > Math.pow(10, 6)) return `${t / Math.pow(10, 6)}m`;
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default LineChart;
