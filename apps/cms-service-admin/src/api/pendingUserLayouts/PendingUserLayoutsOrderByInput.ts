import { SortOrder } from "../../util/SortOrder";

export type PendingUserLayoutsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  layoutVersion?: SortOrder;
  layoutSubversion?: SortOrder;
  createdOn?: SortOrder;
  raisedBy?: SortOrder;
  authorisedBy?: SortOrder;
  layoutId?: SortOrder;
};
