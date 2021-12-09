import CustomCard from "./customCard";

import Loading_icon from "../../assests/icon/loading.svg";
import Check_icon from "../../assests/icon/check.svg";

type TaskCardProps = {
  className?: string;
  index?: number;
  title?: string;
  loading?: boolean;
};

/**
 * A Task card component to display a task and it's status.
 *
 * @param className The className of the card. (optional, default none)
 * @param index The index of the task. (optional, default none)
 * @param title The title of the task. (optional, default none)
 * @param loading The loading status of the task. (optional, default none)
 */

function TaskCard({
  className,
  index,
  title,
  loading,
}: TaskCardProps): JSX.Element {
  return (
    <CustomCard
      backgroundColor="bg-gray-200"
      roundedCorners="rounded-xl"
      padding="pl-2.5 pr-2"
      className={className + " h-8"}
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
