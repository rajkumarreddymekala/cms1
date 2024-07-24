import { SortOrder } from "../../util/SortOrder";

export type LayoutsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  thumbnailUrl?: SortOrder;
  publishedVersion?: SortOrder;
  publishedSubversion?: SortOrder;
  currentVersion?: SortOrder;
  currentSubversion?: SortOrder;
  currentVersionStatus?: SortOrder;
  orderBy?: SortOrder;
  status?: SortOrder;
  createdBy?: SortOrder;
  authorisedBy?: SortOrder;
  createdOn?: SortOrder;
  authorisedOn?: SortOrder;
};
