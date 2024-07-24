import { Layouts } from "../layouts/Layouts";

export type PendingUserLayouts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  layoutVersion: number | null;
  layoutSubversion: number | null;
  createdOn: Date | null;
  raisedBy: string | null;
  authorisedBy: string | null;
  layout?: Layouts | null;
};
