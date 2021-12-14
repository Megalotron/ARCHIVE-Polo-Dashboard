import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

import CustomCard from "../../utils/customCard";

import { PacketsOrigin, getPacketsOrigin } from "../../../utils/api/packets";

type OriginSuspisciousPacketsWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The OriginSuspisciousPackets Widget to display the origin of suspiscious packets.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function OriginSuspisciousPacketsWidget({
  style,
}: OriginSuspisciousPacketsWidgetProps): JSX.Element {
  const [packetsOrigin, setPacketsOrigin] = useState<PacketsOrigin | null>(
    null
  );

  const updatePacketsOrigin = () => {
    getPacketsOrigin().then(setPacketsOrigin).catch(console.error);
  };

  useEffect(() => {
    updatePacketsOrigin();
    const updateUsersStatusInterval = setInterval(updatePacketsOrigin, 5000);
    return () => clearInterval(updateUsersStatusInterval);
  }, []);

  return (
    <CustomCard
      title="Origin of Suspiscious packets"
      style={{ className: style?.className }}
    >
      {packetsOrigin && (
        <Plot
          style={{ width: "100%", height: "100%" }}
          data={[
            {
              values: [packetsOrigin.inside, packetsOrigin.outside],
              labels: ["from inside", "from outside"],
              marker: {
                colors: ["#4D73BE", "#DF8244"],
              },
              type: "pie",
            },
          ]}
          config={{ staticPlot: true, responsive: true }}
          layout={{
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0,
              pad: 4,
            },
            legend: {
              x: 0,
              y: 0,
            },
          }}
        />
      )}
    </CustomCard>
  );
}

export default OriginSuspisciousPacketsWidget;
