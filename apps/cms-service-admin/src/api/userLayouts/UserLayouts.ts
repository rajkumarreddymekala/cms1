import { Layouts } from "../layouts/Layouts";

export type UserLayouts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  createdBy: string | null;
  authorisedBy: string | null;
  createdOn: Date | null;
  authorisedOn: Date | null;
  layout?: Layouts | null;
};
