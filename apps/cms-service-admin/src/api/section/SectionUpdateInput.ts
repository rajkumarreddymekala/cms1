import { LayoutSectionUpdateManyWithoutSectionsInput } from "./LayoutSectionUpdateManyWithoutSectionsInput";

export type SectionUpdateInput = {
  name?: string | null;
  description?: string | null;
  thumbnailUrl?: string | null;
  tags?: string | null;
  status?: string | null;
  createdOn?: Date | null;
  modifiedOn?: Date | null;
  layoutSections?: LayoutSectionUpdateManyWithoutSectionsInput;
};
