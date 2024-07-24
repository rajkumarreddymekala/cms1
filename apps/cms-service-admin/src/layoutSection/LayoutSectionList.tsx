import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LAYOUTS_TITLE_FIELD } from "../layouts/LayoutsTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const LayoutSectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Layout_sections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Layout_version" source="layoutVersion" />
        <TextField label="Content" source="content" />
        <TextField label="Order_by" source="orderBy" />
        <TextField label="Status" source="status" />
        <TextField label="Created_by" source="createdBy" />
        <TextField label="Authorised_by" source="authorisedBy" />
        <TextField label="Created_on" source="createdOn" />
        <TextField label="Authorised_on" source="authorisedOn" />
        <ReferenceField label="Layout" source="layouts.id" reference="Layouts">
          <TextField source={LAYOUTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Section" source="section.id" reference="Section">
          <TextField source={SECTION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
