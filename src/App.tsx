import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { HomePageResource } from "./components/HomePage";
import { CompensationResource } from "./components/Compensation";
import { DepartmentResource } from "./components/Department";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource {...HomePageResource} />
        <Resource {...CompensationResource} />
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />

        {/* справочники */}
        <Resource {...DepartmentResource} />
    </Admin>
);

export default App;