import Plot from "react-plotly.js";

type DashboardOverviewGraphProps = {
  datas: { date: Date; value: number }[];
};

function DashboardOverviewGraph({
  datas,
}: DashboardOverviewGraphProps): JSX.Element {
  return (
    <Plot
      data={[
        {
          x: datas.map((data) => data.date),
          y: datas.map((data) => data.value),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ]}
      style={{ width: "100%", height: "100%" }}
      layout={{
        title: {
          text: "Refused  Packages",
          y: 0.95,
        },
        margin: {
          l: 0,
          r: 0,
          b: 30,
          t: 30,
          pad: 4,
        },
        xaxis: {
          showgrid: false,
          zeroline: false,
          type: "date",
          tickformat: "%d/%m/%y",
        },
        yaxis: {
          rangemode: "tozero",
          automargin: true,
          zeroline: false,
        },
      }}
      config={{ staticPlot: true, responsive: true }}
    />
  );
}

export default DashboardOverviewGraph;
