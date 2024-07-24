import { SortOrder } from "../../util/SortOrder";

export type SectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  thumbnailUrl?: SortOrder;
  tags?: SortOrder;
  status?: SortOrder;
  createdOn?: SortOrder;
  modifiedOn?: SortOrder;
};
