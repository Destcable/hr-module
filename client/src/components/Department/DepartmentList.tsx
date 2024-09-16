import {
    Datagrid,
    TextField,
    List,
} from "react-admin";
import { DepartmentListActions } from "./DepartmentListActions";
import { DepartmentCreateDialog } from "./DepartmentCreateDialog";
import { useState } from "react";

const DepartmentList = () => {
    const [
        isOpenDepartmentCreateDialog,
        setOpenDepartmentCreateDialog
    ] = useState<boolean>(false)

    const handleOpenDepartmentCreateDialog = () => setOpenDepartmentCreateDialog(true);
    const handleCloseDepartmentCreateDialog = () => setOpenDepartmentCreateDialog(false);

    return <>
        <List resource="Department"
            actions={<DepartmentListActions onClick={handleOpenDepartmentCreateDialog} />}
        >
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
        <DepartmentCreateDialog 
            open={isOpenDepartmentCreateDialog}
            onClose={handleCloseDepartmentCreateDialog} 
        />
    </>
};

export default DepartmentList;
