import { LayoutsWhereUniqueInput } from "../layouts/LayoutsWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type LayoutSectionUpdateInput = {
  layoutVersion?: number | null;
  content?: string | null;
  orderBy?: number | null;
  status?: string | null;
  createdBy?: string | null;
  authorisedBy?: string | null;
  createdOn?: Date | null;
  authorisedOn?: Date | null;
  layout?: LayoutsWhereUniqueInput | null;
  section?: SectionWhereUniqueInput | null;
};
