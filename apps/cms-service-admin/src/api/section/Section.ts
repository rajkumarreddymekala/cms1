import { LayoutSection } from "../layoutSection/LayoutSection";

export type Section = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  thumbnailUrl: string | null;
  tags: string | null;
  status: string | null;
  createdOn: Date | null;
  modifiedOn: Date | null;
  layoutSections?: Array<LayoutSection>;
};
