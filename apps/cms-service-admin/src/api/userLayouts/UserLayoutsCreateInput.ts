import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";

export type UserLayoutsCreateInput = {
  userId?: string | null;
  createdBy?: string | null;
  authorisedBy?: string | null;
  createdOn?: Date | null;
  authorisedOn?: Date | null;
  layout?: LayoutsWhereUniqueInput | null;
};
