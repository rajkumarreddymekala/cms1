import { UserLayouts as TUserLayouts } from "../api/userLayouts/UserLayouts";

export const USERLAYOUTS_TITLE_FIELD = "userId";

export const UserLayoutsTitle = (record: TUserLayouts): string => {
  return record.userId?.toString() || String(record.id);
};
