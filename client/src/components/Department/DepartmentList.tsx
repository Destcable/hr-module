import {
    Datagrid,
    TextField,
    List,
} from "react-admin";

const DepartmentList = () => (
    <List resource="Department">
        <Datagrid>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default DepartmentList;
