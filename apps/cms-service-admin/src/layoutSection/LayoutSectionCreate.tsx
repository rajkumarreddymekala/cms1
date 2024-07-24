import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LayoutsTitle } from "../layouts/LayoutsTitle";
import { SectionTitle } from "../section/SectionTitle";

export const LayoutSectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Layout_version" source="layoutVersion" />
        <TextInput label="Content" multiline source="content" />
        <NumberInput step={1} label="Order_by" source="orderBy" />
        <TextInput label="Status" source="status" />
        <TextInput label="Created_by" source="createdBy" />
        <TextInput label="Authorised_by" source="authorisedBy" />
        <DateTimeInput label="Created_on" source="createdOn" />
        <DateTimeInput label="Authorised_on" source="authorisedOn" />
        <ReferenceInput source="layout.id" reference="Layouts" label="Layout">
          <SelectInput optionText={LayoutsTitle} />
        </ReferenceInput>
        <ReferenceInput source="section.id" reference="Section" label="Section">
          <SelectInput optionText={SectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
