import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type LayoutSectionWhereInput = {
  id?: StringFilter;
  layoutVersion?: IntNullableFilter;
  content?: StringNullableFilter;
  orderBy?: IntNullableFilter;
  status?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  authorisedBy?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  authorisedOn?: DateTimeNullableFilter;
  layout?: LayoutsWhereUniqueInput;
  section?: SectionWhereUniqueInput;
};
