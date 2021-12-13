import CustomCard from "../../utils/customCard";

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
  return (
    <CustomCard
      title="Origin of Suspiscious packets"
      style={{ className: style?.className }}
    >
      <div className="w-full h-full bg-gray-300" />
    </CustomCard>
  );
}

export default OriginSuspisciousPacketsWidget;
