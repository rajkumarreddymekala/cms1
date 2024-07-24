import { LayoutsWhereInput } from "./LayoutsWhereInput";
import { LayoutsOrderByInput } from "./LayoutsOrderByInput";

export type LayoutsFindManyArgs = {
  where?: LayoutsWhereInput;
  orderBy?: Array<LayoutsOrderByInput>;
  skip?: number;
  take?: number;
};
