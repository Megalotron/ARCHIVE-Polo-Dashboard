import { DashboardWidget, LastSuspisciousPackagesWidget, RulesWidget, HardwareStatusWidget, OriginSuspisciousPacketsWidget, UserConnectedWidget, NetworkSpeedWidget } from "../widgets/dashboard";

type DashboardLayoutProps = {
  style?: {
    className?: string;
  };
};

/**
 * The layout to be used to show the Dashboard page.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

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
