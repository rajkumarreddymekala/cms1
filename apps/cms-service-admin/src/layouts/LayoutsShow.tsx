import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LAYOUTS_TITLE_FIELD } from "./LayoutsTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const LayoutsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="LayoutSection"
          target="layoutId"
          label="Layout_sections"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Layout_version" source="layoutVersion" />
            <TextField label="Content" source="content" />
            <TextField label="Order_by" source="orderBy" />
            <TextField label="Status" source="status" />
            <TextField label="Created_by" source="createdBy" />
            <TextField label="Authorised_by" source="authorisedBy" />
            <TextField label="Created_on" source="createdOn" />
            <TextField label="Authorised_on" source="authorisedOn" />
            <ReferenceField
              label="Layout"
              source="layouts.id"
              reference="Layouts"
            >
              <TextField source={LAYOUTS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Section"
              source="section.id"
              reference="Section"
            >
              <TextField source={SECTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserLayouts"
          target="layoutId"
          label="User_layoutsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="User_id" source="userId" />
            <TextField label="Created_by" source="createdBy" />
            <TextField label="Authorised_by" source="authorisedBy" />
            <TextField label="Created_on" source="createdOn" />
            <TextField label="Authorised_on" source="authorisedOn" />
            <ReferenceField
              label="Layout"
              source="layouts.id"
              reference="Layouts"
            >
              <TextField source={LAYOUTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PendingUserLayouts"
          target="layoutId"
          label="Pending_user_layoutsItems"
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
            <ReferenceField
              label="Layout"
              source="layouts.id"
              reference="Layouts"
            >
              <TextField source={LAYOUTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
