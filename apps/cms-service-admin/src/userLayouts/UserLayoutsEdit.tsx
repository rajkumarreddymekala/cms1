import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LayoutsTitle } from "../layouts/LayoutsTitle";

export const UserLayoutsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
