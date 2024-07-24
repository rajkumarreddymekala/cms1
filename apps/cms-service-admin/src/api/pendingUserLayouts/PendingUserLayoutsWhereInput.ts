import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";

export type PendingUserLayoutsWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  layoutVersion?: IntNullableFilter;
  layoutSubversion?: IntNullableFilter;
  createdOn?: DateTimeNullableFilter;
  raisedBy?: StringNullableFilter;
  authorisedBy?: StringNullableFilter;
  layout?: LayoutsWhereUniqueInput;
};
