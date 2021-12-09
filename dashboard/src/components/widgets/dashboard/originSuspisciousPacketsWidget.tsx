import CustomCard from "../../utils/customCard";

type OriginSuspisciousPacketsWidgetProps = {
  style?: {
    className?: string;
  };
};

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
