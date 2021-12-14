export type UsersStatus = {
  status: string;
  numberOfUSer: number;
};

/**
 * The getUsersStatus function is to be used to get the current status of the Users.
 */
export async function getUsersStatus(): Promise<UsersStatus> {
  return {
    status: "Nothing suspicious",
    numberOfUSer: 172,
  };
}
