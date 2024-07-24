import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LayoutsList } from "./layouts/LayoutsList";
import { LayoutsCreate } from "./layouts/LayoutsCreate";
import { LayoutsEdit } from "./layouts/LayoutsEdit";
import { LayoutsShow } from "./layouts/LayoutsShow";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { PendingUserLayoutsList } from "./pendingUserLayouts/PendingUserLayoutsList";
import { PendingUserLayoutsCreate } from "./pendingUserLayouts/PendingUserLayoutsCreate";
import { PendingUserLayoutsEdit } from "./pendingUserLayouts/PendingUserLayoutsEdit";
import { PendingUserLayoutsShow } from "./pendingUserLayouts/PendingUserLayoutsShow";
import { LayoutSectionList } from "./layoutSection/LayoutSectionList";
import { LayoutSectionCreate } from "./layoutSection/LayoutSectionCreate";
import { LayoutSectionEdit } from "./layoutSection/LayoutSectionEdit";
import { LayoutSectionShow } from "./layoutSection/LayoutSectionShow";
import { UserLayoutsList } from "./userLayouts/UserLayoutsList";
import { UserLayoutsCreate } from "./userLayouts/UserLayoutsCreate";
import { UserLayoutsEdit } from "./userLayouts/UserLayoutsEdit";
import { UserLayoutsShow } from "./userLayouts/UserLayoutsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CMS Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Layouts"
          list={LayoutsList}
          edit={LayoutsEdit}
          create={LayoutsCreate}
          show={LayoutsShow}
        />
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="PendingUserLayouts"
          list={PendingUserLayoutsList}
          edit={PendingUserLayoutsEdit}
          create={PendingUserLayoutsCreate}
          show={PendingUserLayoutsShow}
        />
        <Resource
          name="LayoutSection"
          list={LayoutSectionList}
          edit={LayoutSectionEdit}
          create={LayoutSectionCreate}
          show={LayoutSectionShow}
        />
        <Resource
          name="UserLayouts"
          list={UserLayoutsList}
          edit={UserLayoutsEdit}
          create={UserLayoutsCreate}
          show={UserLayoutsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
