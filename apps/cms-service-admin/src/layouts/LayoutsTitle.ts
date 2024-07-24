import { Layouts as TLayouts } from "../api/layouts/Layouts";

export const LAYOUTS_TITLE_FIELD = "name";

export const LayoutsTitle = (record: TLayouts): string => {
  return record.name?.toString() || String(record.id);
};
