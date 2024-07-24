import { Section as TSection } from "../api/section/Section";

export const SECTION_TITLE_FIELD = "name";

export const SectionTitle = (record: TSection): string => {
  return record.name?.toString() || String(record.id);
};
