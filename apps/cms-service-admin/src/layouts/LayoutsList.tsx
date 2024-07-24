import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LayoutsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LayoutsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Thumbnail_url" source="thumbnailUrl" />
        <TextField label="Published_version" source="publishedVersion" />
        <TextField label="Published_subversion" source="publishedSubversion" />
        <TextField label="Current_version" source="currentVersion" />
        <TextField label="Current_subversion" source="currentSubversion" />
        <TextField
          label="Current_version_status"
          source="currentVersionStatus"
        />
        <TextField label="Order_by" source="orderBy" />
        <TextField label="Status" source="status" />
        <TextField label="Created_by" source="createdBy" />
        <TextField label="Authorised_by" source="authorisedBy" />
        <TextField label="Created_on" source="createdOn" />
        <TextField label="Authorised_on" source="authorisedOn" />
      </Datagrid>
    </List>
  );
};
