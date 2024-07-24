import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LayoutsTitle } from "../layouts/LayoutsTitle";

export const PendingUserLayoutsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="User_id" source="userId" />
        <NumberInput step={1} label="Layout_version" source="layoutVersion" />
        <NumberInput
          step={1}
          label="Layout_subversion"
          source="layoutSubversion"
        />
        <DateTimeInput label="Created_on" source="createdOn" />
        <TextInput label="Raised_by" source="raisedBy" />
        <TextInput label="Authorised_by" source="authorisedBy" />
        <ReferenceInput source="layout.id" reference="Layouts" label="Layout">
          <SelectInput optionText={LayoutsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
