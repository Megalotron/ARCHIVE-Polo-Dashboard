export type HardwareStatus = {
  status: "Stable" | "Unstable" | "Unknown";
  cpuUsage: number;
  ramUsage: { usage: number; max: number };
};

/**
 * The getHardwareStatus function is to be used to get the current status of the Hardware.
 */
export async function getHardwareStatus(): Promise<HardwareStatus> {
  return {
    status: "Stable",
    cpuUsage: 27,
    ramUsage: { usage: 1.4, max: 4 },
  };
}
