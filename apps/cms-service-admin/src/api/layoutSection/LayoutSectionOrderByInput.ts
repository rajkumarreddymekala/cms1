import { SortOrder } from "../../util/SortOrder";

export type LayoutSectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  layoutVersion?: SortOrder;
  content?: SortOrder;
  orderBy?: SortOrder;
  status?: SortOrder;
  createdBy?: SortOrder;
  authorisedBy?: SortOrder;
  createdOn?: SortOrder;
  authorisedOn?: SortOrder;
  layoutId?: SortOrder;
  sectionId?: SortOrder;
};
