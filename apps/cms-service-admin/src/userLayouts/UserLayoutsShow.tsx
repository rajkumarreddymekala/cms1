import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LAYOUTS_TITLE_FIELD } from "../layouts/LayoutsTitle";

export const UserLayoutsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User_id" source="userId" />
        <TextField label="Created_by" source="createdBy" />
        <TextField label="Authorised_by" source="authorisedBy" />
        <TextField label="Created_on" source="createdOn" />
        <TextField label="Authorised_on" source="authorisedOn" />
        <ReferenceField label="Layout" source="layouts.id" reference="Layouts">
          <TextField source={LAYOUTS_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
