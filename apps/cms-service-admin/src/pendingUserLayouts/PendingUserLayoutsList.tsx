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

export const PendingUserLayoutsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pending_user_layoutsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User_id" source="userId" />
        <TextField label="Layout_version" source="layoutVersion" />
        <TextField label="Layout_subversion" source="layoutSubversion" />
        <TextField label="Created_on" source="createdOn" />
        <TextField label="Raised_by" source="raisedBy" />
        <TextField label="Authorised_by" source="authorisedBy" />
        <ReferenceField label="Layout" source="layouts.id" reference="Layouts">
          <TextField source={LAYOUTS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
