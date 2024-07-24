import { LayoutSection as TLayoutSection } from "../api/layoutSection/LayoutSection";

export const LAYOUTSECTION_TITLE_FIELD = "status";

export const LayoutSectionTitle = (record: TLayoutSection): string => {
  return record.status?.toString() || String(record.id);
};
