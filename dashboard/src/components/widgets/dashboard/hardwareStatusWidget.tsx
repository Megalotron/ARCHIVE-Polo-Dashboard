import CustomCard from "../../utils/customCard";

type HardwareStatusWidgetProps = {
  style?: {
    className?: string;
  };
};

function HardwareStatusWidget({
  style,
}: HardwareStatusWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Hardware status"
      subTitle="Stable"
      style={{ className: style?.className }}
    >
      <div className="flex flex-row">
        <CustomCard
          style={{ backgroundColor: "bg-gray-200", className: "w-32 h-20" }}
        />
        <div className="w-12" />
        <CustomCard
          style={{ backgroundColor: "bg-gray-200", className: "w-32 h-20" }}
        />
      </div>
    </CustomCard>
  );
}

export default HardwareStatusWidget;
