import { LayoutSection } from "../layoutSection/LayoutSection";
import { UserLayouts } from "../userLayouts/UserLayouts";
import { PendingUserLayouts } from "../pendingUserLayouts/PendingUserLayouts";

export type Layouts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  thumbnailUrl: string | null;
  publishedVersion: number | null;
  publishedSubversion: number | null;
  currentVersion: number | null;
  currentSubversion: number | null;
  currentVersionStatus: string | null;
  orderBy: number | null;
  status: string | null;
  createdBy: string | null;
  authorisedBy: string | null;
  createdOn: Date | null;
  authorisedOn: Date | null;
  layoutSections?: Array<LayoutSection>;
  userLayoutsItems?: Array<UserLayouts>;
  pendingUserLayoutsItems?: Array<PendingUserLayouts>;
};
