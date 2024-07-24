import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LayoutSectionTitle } from "../layoutSection/LayoutSectionTitle";

export const SectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Thumbnail_url" source="thumbnailUrl" />
        <TextInput label="Tags" source="tags" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Created_on" source="createdOn" />
        <DateTimeInput label="Modified_on" source="modifiedOn" />
        <ReferenceArrayInput
          source="layoutSections"
          reference="LayoutSection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LayoutSectionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
