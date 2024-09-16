import { Admin, Resource } from "react-admin";
import { HomePageResource } from "./components/HomePage";
import { CompensationResource } from "./components/Compensation";
import { MasterDataResource } from "./components/MasterData";
import { DepartmentResource } from "./components/Department";
import { PositionResource } from "./components/Position";
import { dataProvider } from "./core/config/dataProvider.config";

const App = () => {

    return (
        <Admin dataProvider={dataProvider}>
            <Resource {...HomePageResource} />
            <Resource {...CompensationResource} />

            {/* Ресурс MasterDataResource добавлен, но не будет отображаться в меню */}
            <Resource {...MasterDataResource} />
            <Resource {...DepartmentResource} />
            <Resource {...PositionResource} />
        </Admin>
    );
}

export default App;
