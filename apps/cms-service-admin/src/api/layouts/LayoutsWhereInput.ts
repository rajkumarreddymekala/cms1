import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LayoutSectionListRelationFilter } from "../layoutSection/LayoutSectionListRelationFilter";
import { UserLayoutsListRelationFilter } from "../userLayouts/UserLayoutsListRelationFilter";
import { PendingUserLayoutsListRelationFilter } from "../pendingUserLayouts/PendingUserLayoutsListRelationFilter";

export type LayoutsWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  thumbnailUrl?: StringNullableFilter;
  publishedVersion?: IntNullableFilter;
  publishedSubversion?: IntNullableFilter;
  currentVersion?: IntNullableFilter;
  currentSubversion?: IntNullableFilter;
  currentVersionStatus?: StringNullableFilter;
  orderBy?: IntNullableFilter;
  status?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  authorisedBy?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  authorisedOn?: DateTimeNullableFilter;
  layoutSections?: LayoutSectionListRelationFilter;
  userLayoutsItems?: UserLayoutsListRelationFilter;
  pendingUserLayoutsItems?: PendingUserLayoutsListRelationFilter;
};
