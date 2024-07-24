import { LayoutSectionCreateNestedManyWithoutSectionsInput } from "./LayoutSectionCreateNestedManyWithoutSectionsInput";

export type SectionCreateInput = {
  name?: string | null;
  description?: string | null;
  thumbnailUrl?: string | null;
  tags?: string | null;
  status?: string | null;
  createdOn?: Date | null;
  modifiedOn?: Date | null;
  layoutSections?: LayoutSectionCreateNestedManyWithoutSectionsInput;
};
