import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";

export type PendingUserLayoutsCreateInput = {
  userId?: string | null;
  layoutVersion?: number | null;
  layoutSubversion?: number | null;
  createdOn?: Date | null;
  raisedBy?: string | null;
  authorisedBy?: string | null;
  layout?: LayoutsWhereUniqueInput | null;
};
