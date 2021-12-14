import { useState, useEffect } from "react";

import CustomCard from "../../utils/customCard";

import { UploadIcon, DownloadIcon } from "../../../assets/icon";

import { NetworkStatus, getNetworkStatus } from "../../../utils/api/network";

type NetworkSpeedWidgetProps = {
  style?: {
    className?: string;
  };
};

/**
 * The NetworkSpeedWidget widget to display the speed of the network.
 *
 * @param style The style to be applied to the card. (optional, default none)
 */

function NetworkSpeedWidget({ style }: NetworkSpeedWidgetProps): JSX.Element {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus | null>(
    null
  );

  const updateNetworkStatus = () => {
    getNetworkStatus().then(setNetworkStatus).catch(console.error);
  };

  useEffect(() => {
    updateNetworkStatus();
    const updateNetworkStatusInterval = setInterval(updateNetworkStatus, 5000);
    return () => clearInterval(updateNetworkStatusInterval);
  }, []);

  return (
    <CustomCard
      title="Network Speed"
      subTitle={networkStatus?.status}
      style={{ className: style?.className }}
    >
      <div className="flex flex-row items-center">
        <CustomCard
          style={{
            backgroundColor: "bg-networkSpeedDownload",
            padding: "pt-5 pb-5 pl-4 pr-4",
          }}
          icon={DownloadIcon}
          title="Download"
          subTitle={networkStatus?.downloadSpeed + " Mb/s"}
        />
        <div className="w-12" />
        <CustomCard
          style={{
            backgroundColor: "bg-networkSpeedUpload",
            padding: "pt-5 pb-5 pl-4 pr-4",
          }}
          icon={UploadIcon}
          title="Upload"
          subTitle={networkStatus?.uploadSpeed + " Mb/s"}
        />
      </div>
    </CustomCard>
  );
}

export default NetworkSpeedWidget;
