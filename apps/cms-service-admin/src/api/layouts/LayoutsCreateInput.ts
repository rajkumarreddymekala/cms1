import { LayoutSectionCreateNestedManyWithoutLayoutsItemsInput } from "./LayoutSectionCreateNestedManyWithoutLayoutsItemsInput";
import { UserLayoutsCreateNestedManyWithoutLayoutsItemsInput } from "./UserLayoutsCreateNestedManyWithoutLayoutsItemsInput";
import { PendingUserLayoutsCreateNestedManyWithoutLayoutsItemsInput } from "./PendingUserLayoutsCreateNestedManyWithoutLayoutsItemsInput";

export type LayoutsCreateInput = {
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
  layoutSections?: LayoutSectionCreateNestedManyWithoutLayoutsItemsInput;
  userLayoutsItems?: UserLayoutsCreateNestedManyWithoutLayoutsItemsInput;
  pendingUserLayoutsItems?: PendingUserLayoutsCreateNestedManyWithoutLayoutsItemsInput;
};
