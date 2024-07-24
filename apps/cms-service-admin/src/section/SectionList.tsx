import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Sections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Thumbnail_url" source="thumbnailUrl" />
        <TextField label="Tags" source="tags" />
        <TextField label="Status" source="status" />
        <TextField label="Created_on" source="createdOn" />
        <TextField label="Modified_on" source="modifiedOn" />
      </Datagrid>
    </List>
  );
};
