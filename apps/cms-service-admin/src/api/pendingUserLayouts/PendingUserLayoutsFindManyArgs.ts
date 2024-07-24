import { PendingUserLayoutsWhereInput } from "./PendingUserLayoutsWhereInput";
import { PendingUserLayoutsOrderByInput } from "./PendingUserLayoutsOrderByInput";

export type PendingUserLayoutsFindManyArgs = {
  where?: PendingUserLayoutsWhereInput;
  orderBy?: Array<PendingUserLayoutsOrderByInput>;
  skip?: number;
  take?: number;
};
