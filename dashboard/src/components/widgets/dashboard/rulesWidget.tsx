import CustomCard from "../../utils/customCard";

type RulesWidgetProps = {
  style?: {
    className?: string;
  };
};

function RulesWidget({ style }: RulesWidgetProps): JSX.Element {
  return (
    <CustomCard title="Rules" style={{ className: style?.className }}>
      <div className="w-full h-full mt-5 bg-gray-300" />
    </CustomCard>
  );
}

export default RulesWidget;
