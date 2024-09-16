import { Datagrid, List, TextField } from "react-admin";

const PositionList = () => (
    <List resource="Position">
        <Datagrid>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default PositionList;