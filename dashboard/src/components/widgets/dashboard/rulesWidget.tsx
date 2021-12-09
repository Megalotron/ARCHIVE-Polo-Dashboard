import CustomCard from "../../utils/customCard";

type RulesWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The Rules widget to display and edit rules.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function RulesWidget({ style }: RulesWidgetProps): JSX.Element {
  return (
    <CustomCard title="Rules" style={{ className: style?.className }}>
      <div className="w-full h-full mt-5 bg-gray-300" />
    </CustomCard>
  );
}

export default RulesWidget;
