import { LayoutSectionUpdateManyWithoutLayoutsItemsInput } from "./LayoutSectionUpdateManyWithoutLayoutsItemsInput";
import { UserLayoutsUpdateManyWithoutLayoutsItemsInput } from "./UserLayoutsUpdateManyWithoutLayoutsItemsInput";
import { PendingUserLayoutsUpdateManyWithoutLayoutsItemsInput } from "./PendingUserLayoutsUpdateManyWithoutLayoutsItemsInput";

export type LayoutsUpdateInput = {
  name?: string | null;
  thumbnailUrl?: string | null;
  publishedVersion?: number | null;
  publishedSubversion?: number | null;
  currentVersion?: number | null;
  currentSubversion?: number | null;
  currentVersionStatus?: string | null;
  orderBy?: number | null;
  status?: string | null;
  createdBy?: string | null;
  authorisedBy?: string | null;
  createdOn?: Date | null;
  authorisedOn?: Date | null;
  layoutSections?: LayoutSectionUpdateManyWithoutLayoutsItemsInput;
  userLayoutsItems?: UserLayoutsUpdateManyWithoutLayoutsItemsInput;
  pendingUserLayoutsItems?: PendingUserLayoutsUpdateManyWithoutLayoutsItemsInput;
};
