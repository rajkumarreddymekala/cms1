import { UserLayoutsWhereInput } from "./UserLayoutsWhereInput";
import { UserLayoutsOrderByInput } from "./UserLayoutsOrderByInput";

export type UserLayoutsFindManyArgs = {
  where?: UserLayoutsWhereInput;
  orderBy?: Array<UserLayoutsOrderByInput>;
  skip?: number;
  take?: number;
};
