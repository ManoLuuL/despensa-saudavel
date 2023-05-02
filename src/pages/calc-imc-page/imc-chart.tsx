import { Chart } from "primereact/chart";
import { ChartData } from "chart.js";
import { IMCResult } from "./types";

interface IMCChartProps {
  result: IMCResult;
}

export function IMCChart(props: IMCChartProps) {
  const { result } = props;

  const chartData: ChartData = {
    datasets: [
      {
        data: [result.value, 25 - result.value],
        backgroundColor: [result.color, "#E0E0E0"],
        borderWidth: 0,
      },
    ],
    labels: [result.label, ""],
  };

  return (
    <div className="p-card">
      <div className="p-card-header">{result.label}</div>
      <div className="p-card-body">
        <Chart type="doughnut" data={chartData} />
      </div>
    </div>
  );
}
