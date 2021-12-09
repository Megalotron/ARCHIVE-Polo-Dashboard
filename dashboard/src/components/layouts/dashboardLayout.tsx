import DashboardWidget from "../widgets/dashboard/dashboardWidget";
import LastSuspisciousPackagesWidget from "../widgets/dashboard/lastSuspisciousPackagesWidget";
import RulesWidget from "../widgets/dashboard/rulesWidget";

import HardwareStatusWidget from "../widgets/dashboard/hardwareStatusWidget";
import NetworkSpeedWidget from "../widgets/dashboard/networkSpeedWidget";
import UserConnectedWidget from "../widgets/dashboard/userConnectedWidget";
import OriginSuspisciousPacketsWidget from "../widgets/dashboard/originSuspisciousPacketsWidget";

type DashboardLayoutProps = {
  style?: {
    className?: string;
  };
};

function DashboardLayout({ style }: DashboardLayoutProps): JSX.Element {
  return (
    <div
      className={style?.className + " flex flex-col w-full h-full space-y-3"}
    >
      <div className="flex flex-row justify-between flex-1 space-x-3">
        <DashboardWidget style={{ className: "w-5/12" }} />
        <RulesWidget style={{ className: "flex-auto" }} />
        <LastSuspisciousPackagesWidget style={{ className: "flex-auto" }} />
      </div>
      <div className="flex flex-row justify-between space-x-3 h-1/5">
        <HardwareStatusWidget style={{ className: "flex-1" }} />
        <NetworkSpeedWidget style={{ className: "flex-1" }} />
        <UserConnectedWidget style={{ className: "flex-1" }} />
        <OriginSuspisciousPacketsWidget style={{ className: "flex-1" }} />
      </div>
    </div>
  );
}

export default DashboardLayout;
