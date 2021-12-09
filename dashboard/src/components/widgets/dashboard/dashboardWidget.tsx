import CustomCard from "../../utils/customCard";

type DashboardWidgetProps = {
  style?: {
    className?: string;
  };
};

function DashboardWidget({ style }: DashboardWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Dashboard"
      subTitle="Overview"
      style={{ className: style?.className }}
    >
      <div className="w-full h-full bg-gray-300" />
    </CustomCard>
  );
}

export default DashboardWidget;
