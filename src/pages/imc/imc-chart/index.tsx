import { Chart } from "primereact/chart";
import { IMCChartProps } from "./types";
import { IMCChartWrapper, ResultWrapper } from "./styles";

export function IMCChart(props: IMCChartProps) {
  const { result } = props;

  const data = {
    labels: [result.label],
    datasets: [
      {
        data: [result.value],
        backgroundColor: [result.color],
      },
    ],
  };

  return (
    <IMCChartWrapper>
      <ResultWrapper>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {result.value}
        </span>
        <span style={{ fontSize: "1.5rem", color: result.color }}>
          {result.label}
        </span>
      </ResultWrapper>
      <Chart type="doughnut " data={data} />
    </IMCChartWrapper>
  );
}
