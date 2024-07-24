import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LayoutSectionTitle } from "../layoutSection/LayoutSectionTitle";

export const SectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
