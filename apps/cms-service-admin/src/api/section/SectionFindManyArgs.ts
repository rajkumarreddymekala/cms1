import { SectionWhereInput } from "./SectionWhereInput";
import { SectionOrderByInput } from "./SectionOrderByInput";

export type SectionFindManyArgs = {
  where?: SectionWhereInput;
  orderBy?: Array<SectionOrderByInput>;
  skip?: number;
  take?: number;
};
