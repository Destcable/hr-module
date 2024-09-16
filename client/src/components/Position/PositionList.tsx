import { useState } from "react";
import { Datagrid, List, TextField } from "react-admin";
import { PositionListActions } from "./PositionListActions";
import PositionCreateDialog from "./PositionCreateDialog";

const PositionList = () => {
    const [
        isOpenPositionCreateDialog,
        setOpenPositionCreateDialog
    ] = useState<boolean>(false)

    const handleOpenPositionCreateDialog = () => setOpenPositionCreateDialog(true);
    const handleClosePositionCreateDialog = () => setOpenPositionCreateDialog(false);

    return <>
        <List resource="Position"
            actions={<PositionListActions onClick={handleOpenPositionCreateDialog} />}
        >
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
        <PositionCreateDialog
            open={isOpenPositionCreateDialog}
            onClose={handleClosePositionCreateDialog}
        />
    </>
};

export default PositionList;