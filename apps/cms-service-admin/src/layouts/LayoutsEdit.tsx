import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LayoutSectionTitle } from "../layoutSection/LayoutSectionTitle";
import { UserLayoutsTitle } from "../userLayouts/UserLayoutsTitle";
import { PendingUserLayoutsTitle } from "../pendingUserLayouts/PendingUserLayoutsTitle";

export const LayoutsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Thumbnail_url" source="thumbnailUrl" />
        <NumberInput
          step={1}
          label="Published_version"
          source="publishedVersion"
        />
        <NumberInput
          step={1}
          label="Published_subversion"
          source="publishedSubversion"
        />
        <NumberInput step={1} label="Current_version" source="currentVersion" />
        <NumberInput
          step={1}
          label="Current_subversion"
          source="currentSubversion"
        />
        <TextInput
          label="Current_version_status"
          source="currentVersionStatus"
        />
        <NumberInput step={1} label="Order_by" source="orderBy" />
        <TextInput label="Status" source="status" />
        <TextInput label="Created_by" source="createdBy" />
        <TextInput label="Authorised_by" source="authorisedBy" />
        <DateTimeInput label="Created_on" source="createdOn" />
        <DateTimeInput label="Authorised_on" source="authorisedOn" />
        <ReferenceArrayInput
          source="layoutSections"
          reference="LayoutSection"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LayoutSectionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userLayoutsItems"
          reference="UserLayouts"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserLayoutsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="pendingUserLayoutsItems"
          reference="PendingUserLayouts"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PendingUserLayoutsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
