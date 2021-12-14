export type PacketsOrigin = {
  inside: number;
  outside: number;
};

/**
 * The getPacketsOrigin function is to be used to get the current status of the Packets.
 */
export async function getPacketsOrigin(): Promise<PacketsOrigin> {
  return {
    inside: 300,
    outside: 3700,
  };
}
