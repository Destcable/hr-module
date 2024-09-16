import { Admin, Layout, Resource } from "react-admin";
import { HomePageResource } from "./components/HomePage";
import { CompensationResource } from "./components/Compensation";
import { MasterDataResource } from "./components/MasterData";
import { DepartmentResource } from "./components/Department";
import { PositionResource } from "./components/Position";
import { dataProvider } from "./core/config/dataProvider.config";
import { MenuSidebar } from "./core/components/MenuSidebar/MenuSidebar";
import { ReactNode } from "react";


export const MyLayout = ({ children }: { children: ReactNode}) => (
    <Layout menu={MenuSidebar}>
        {children}
    </Layout>
);

const App = () => {

    return (
        <Admin dataProvider={dataProvider} layout={MyLayout}>
            <Resource {...HomePageResource} />
            <Resource {...CompensationResource} />
            <Resource {...MasterDataResource} />


            {/* Ресурсы не отображаются в меню */}
            <Resource {...DepartmentResource} />
            <Resource {...PositionResource} />
        </Admin>
    );
}

export default App;
