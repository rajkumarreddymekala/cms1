import { LayoutSectionWhereInput } from "./LayoutSectionWhereInput";
import { LayoutSectionOrderByInput } from "./LayoutSectionOrderByInput";

export type LayoutSectionFindManyArgs = {
  where?: LayoutSectionWhereInput;
  orderBy?: Array<LayoutSectionOrderByInput>;
  skip?: number;
  take?: number;
};
