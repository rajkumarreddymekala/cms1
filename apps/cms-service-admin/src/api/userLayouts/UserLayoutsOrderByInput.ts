import { SortOrder } from "../../util/SortOrder";

export type UserLayoutsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  createdBy?: SortOrder;
  authorisedBy?: SortOrder;
  createdOn?: SortOrder;
  authorisedOn?: SortOrder;
  layoutId?: SortOrder;
};
