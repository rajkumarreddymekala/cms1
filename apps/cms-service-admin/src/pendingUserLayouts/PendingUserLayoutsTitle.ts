import { PendingUserLayouts as TPendingUserLayouts } from "../api/pendingUserLayouts/PendingUserLayouts";

export const PENDINGUSERLAYOUTS_TITLE_FIELD = "userId";

export const PendingUserLayoutsTitle = (
  record: TPendingUserLayouts
): string => {
  return record.userId?.toString() || String(record.id);
};
