import CustomCard from "../../utils/customCard";
import Plot from "react-plotly.js";

type DashboardWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The Dashboard widget displaying an overview of the data.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function DashboardWidget({ style }: DashboardWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Dashboard"
      subTitle="Overview"
      style={{ className: style?.className }}
    >
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={[
          {
            y: [1100, 2550, 930, 3900, 2400, 3100, 1700],
            x: [
              "10 sept",
              "11 sept",
              "12 sept",
              "13 sept",
              "14 sept",
              "15 sept",
              "16 sept",
            ],
            marker: {
              color: "#e0874b",
            },
            type: "scatter",
          },
        ]}
        config={{ staticPlot: true, responsive: true }}
        layout={{
          title: "Refused Packages",
          xaxis: {
            rangemode: "tozero",
            showgrid: false,
          },
          yaxis: {
            rangemode: "tozero",
          },
          margin: {
            t: 30,
            pad: 2,
          },
        }}
      />
    </CustomCard>
  );
}

export default DashboardWidget;
