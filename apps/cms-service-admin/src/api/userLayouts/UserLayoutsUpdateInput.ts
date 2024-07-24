import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";

export type UserLayoutsUpdateInput = {
  userId?: string | null;
  createdBy?: string | null;
  authorisedBy?: string | null;
  createdOn?: Date | null;
  authorisedOn?: Date | null;
  layout?: LayoutsWhereUniqueInput | null;
};
