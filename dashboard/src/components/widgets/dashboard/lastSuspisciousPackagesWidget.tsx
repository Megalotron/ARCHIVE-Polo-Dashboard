import CustomCard from "../../utils/customCard";

type LastSuspisciousPackagesWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The LastSuspiciousPackagesWidget widget to the logs of the data.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function LastSuspisciousPackagesWidget({
  style,
}: LastSuspisciousPackagesWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Last Suspiscious Packages"
      style={{ className: style?.className }}
    >
      <div className="w-full h-full mt-5 bg-gray-300" />
    </CustomCard>
  );
}

export default LastSuspisciousPackagesWidget;
