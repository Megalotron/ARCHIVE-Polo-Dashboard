import CustomCard from "./customCard";

import Loading_icon from "../../assests/icon/loading.svg";
import Check_icon from "../../assests/icon/check.svg";

type TaskCardProps = {
  index?: number;
  title?: string;
  loading?: boolean;
  style?: {
    className?: string;
  };
};

/**
 * A Task card component to display a task and it's status.
 *
 * @param index The index of the task. (optional, default none)
 * @param title The title of the task. (optional, default none)
 * @param loading The loading status of the task. (optional, default none)
 * @param stylre The style of the task card. (optional, default none)
 */

function TaskCard({
  index,
  title,
  loading,
  style,
}: TaskCardProps): JSX.Element {
  return (
    <CustomCard
      style={{
        backgroundColor: "bg-gray-200",
        roundedCorners: "rounded-xl",
        padding: "pl-2.5 pr-2",
        className: style?.className + " h-8",
      }}
    >
      <div className="flex flex-row items-center justify-between w-full ">
        <p className="w-6 text-sm font-bold">{index}</p>
        <p className="text-sm font-bold">{title}</p>
        <div className="flex flex-row items-center justify-center w-6 h-6">
          {loading !== undefined &&
            (loading ? (
              <img
                src={Loading_icon}
                alt="loading"
                className="w-6 h-6 animate-spin"
              />
            ) : (
              <img src={Check_icon} alt="loading" className="w-5 h-5" />
            ))}
        </div>
      </div>
    </CustomCard>
  );
}

export default TaskCard;
