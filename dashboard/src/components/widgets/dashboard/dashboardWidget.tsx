import CustomCard from "../../utils/customCard";

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
      <div className="w-full h-full bg-gray-300" />
    </CustomCard>
  );
}

export default DashboardWidget;
