import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";

export type UserLayoutsWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  authorisedBy?: StringNullableFilter;
  createdOn?: DateTimeNullableFilter;
  authorisedOn?: DateTimeNullableFilter;
  layout?: LayoutsWhereUniqueInput;
};
