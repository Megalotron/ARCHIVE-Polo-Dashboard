import { useState, useEffect } from "react";

import CustomCard from "../../utils/customCard";

import { UsersStatus, getUsersStatus } from "../../../utils/api/users";

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
  const [usersStatus, setUsersStatus] = useState<UsersStatus | null>(null);

  const updateUsersStatus = () => {
    getUsersStatus().then(setUsersStatus).catch(console.error);
  };

  useEffect(() => {
    updateUsersStatus();
    const updateUsersStatusInterval = setInterval(updateUsersStatus, 5000);
    return () => clearInterval(updateUsersStatusInterval);
  }, []);

  return (
    <CustomCard
      title="Users Connected"
      subTitle={usersStatus?.status}
      style={{ className: style?.className }}
    >
      <div className="flex flex-row items-center justify-center w-full h-full">
        <CustomCard
          style={{
            backgroundColor: "bg-usersStatus",
            padding: "pl-12 pr-12 pt-4 pb-4",
          }}
        >
          <p className="text-5xl text-white">{usersStatus?.numberOfUSer}</p>
        </CustomCard>
      </div>
    </CustomCard>
  );
}

export default UserConnectedWidget;
