import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LayoutSectionListRelationFilter } from "../layoutSection/LayoutSectionListRelationFilter";

export type SectionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  thumbnailUrl?: StringNullableFilter;
  tags?: StringNullableFilter;
  status?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  modifiedOn?: DateTimeNullableFilter;
  layoutSections?: LayoutSectionListRelationFilter;
};
