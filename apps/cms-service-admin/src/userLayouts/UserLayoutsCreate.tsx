import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LayoutsTitle } from "../layouts/LayoutsTitle";

export const UserLayoutsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="User_id" source="userId" />
        <TextInput label="Created_by" source="createdBy" />
        <TextInput label="Authorised_by" source="authorisedBy" />
        <DateTimeInput label="Created_on" source="createdOn" />
        <DateTimeInput label="Authorised_on" source="authorisedOn" />
        <ReferenceInput source="layout.id" reference="Layouts" label="Layout">
          <SelectInput optionText={LayoutsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
