import CustomCard from "../../utils/customCard";

import CheckIcon from "../../../assets/icon/check.svg";
import EditIcon from "../../../assets/icon/edit.svg";
import PlusIcon from "../../../assets/icon/plus.svg";

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
      <div className="h-full pt-5">
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-sm font-bold leading-4">
              Send SMS to Paul when suspiscious pkg
            </p>
            <div className="flex flex-row h-5 space-x-2">
              <img
                alt="checkIcon"
                src={CheckIcon}
                className="h-full cursor-pointer"
              />
              <img
                alt="EditIcon"
                src={EditIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <CustomCard
          style={{
            backgroundColor: "bg-gray-200",
            padding: "p-1.5",
            roundedCorners: "rounded-lg",
            className: "w-full",
          }}
        >
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-sm font-bold leading-4">
              Call SysAdmin when an attack is detected
            </p>
            <div className="flex flex-row h-5 space-x-2">
              <img
                alt="checkIcon"
                src={CheckIcon}
                className="h-full cursor-pointer"
              />
              <img
                alt="EditIcon"
                src={EditIcon}
                className="h-full cursor-pointer"
              />
            </div>
          </div>
        </CustomCard>
        <div className="flex flex-row justify-center w-full pt-8">
          <CustomCard
            style={{
              backgroundColor: "bg-black hover:opacity-70",
              padding: "p-2 pr-2.5",
              roundedCorners: "rounded-xl",
              className: "cursor-pointer",
            }}
          >
            <div className="flex flex-row items-center space-x-2">
              <img alt="plusIcon" src={PlusIcon} />
              <p className="text-base font-bold leading-4 text-white">Add</p>
            </div>
          </CustomCard>
        </div>
      </div>
    </CustomCard>
  );
}

export default RulesWidget;
