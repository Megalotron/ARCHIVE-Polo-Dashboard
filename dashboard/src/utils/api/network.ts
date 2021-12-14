export type NetworkStatus = {
  status: "Stable" | "Unstable" | "Unknown";
  downloadSpeed: number;
  uploadSpeed: number;
};

/**
 * The getNetworkStatus function is to be used to get the current status of the Network.
 */
export async function getNetworkStatus(): Promise<NetworkStatus> {
  return {
    status: "Stable",
    downloadSpeed: 398,
    uploadSpeed: 98,
  };
}
