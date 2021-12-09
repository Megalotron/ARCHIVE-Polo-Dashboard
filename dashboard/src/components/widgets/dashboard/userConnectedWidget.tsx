import CustomCard from "../../utils/customCard";

type UserConnectedWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The UserConnectedWidget the number of user connected.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function UserConnectedWidget({ style }: UserConnectedWidgetProps): JSX.Element {
  return (
    <CustomCard
      title="Users Connected"
      subTitle="Nothing suspiscious"
      style={{ className: style?.className }}
    >
      <div className="flex flex-row items-center justify-center w-full h-full">
        <CustomCard
          style={{ backgroundColor: "bg-gray-200", className: "w-1/2 h-3/4" }}
        />
      </div>
    </CustomCard>
  );
}

export default UserConnectedWidget;
