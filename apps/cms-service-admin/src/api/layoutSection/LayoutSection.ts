import { Layouts } from "../layouts/Layouts";
import { Section } from "../section/Section";

export type LayoutSection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  layoutVersion: number | null;
  content: string | null;
  orderBy: number | null;
  status: string | null;
  createdBy: string | null;
  authorisedBy: string | null;
  createdOn: Date | null;
  authorisedOn: Date | null;
  layout?: Layouts | null;
  section?: Section | null;
};
