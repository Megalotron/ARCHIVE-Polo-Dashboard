import { useState, useEffect } from "react";

import CustomCard from "../../utils/customCard";

import { CpuIcon, RamIcon } from "../../../assets/icon";

import { HardwareStatus, getHardwareStatus } from "../../../utils/api/hardware";

type HardwareStatusWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The HardwareStatusWidget widget to display the status of the hardware.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function HardwareStatusWidget({
  style,
}: HardwareStatusWidgetProps): JSX.Element {
  const [hardwareStatus, setHardwareStatus] = useState<HardwareStatus | null>(
    null
  );

  const updateHardwareStatus = () => {
    getHardwareStatus().then(setHardwareStatus).catch(console.error);
  };

  useEffect(() => {
    updateHardwareStatus();
    const updateHardwareStatusInterval = setInterval(
      updateHardwareStatus,
      5000
    );
    return () => clearInterval(updateHardwareStatusInterval);
  }, []);

  return (
    <CustomCard
      title="Hardware status"
      subTitle={hardwareStatus?.status}
      style={{ className: style?.className }}
    >
      <div className="flex flex-row">
        <CustomCard
          style={{
            backgroundColor: "bg-hardwareStatusCPU",
            padding: "pt-5 pb-5 pl-4 pr-4",
          }}
          icon={CpuIcon}
          title="CPU"
          subTitle={`${hardwareStatus?.cpuUsage}%`}
        />
        <div className="w-12" />
        <CustomCard
          style={{
            backgroundColor: "bg-hardwareStatusRAM",
            padding: "pt-5 pb-5 pl-4 pr-4",
          }}
          icon={RamIcon}
          title="RAM"
          subTitle={`${hardwareStatus?.ramUsage.usage} / ${hardwareStatus?.ramUsage.max} Go`}
        />
      </div>
    </CustomCard>
  );
}

export default HardwareStatusWidget;
