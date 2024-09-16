import { FC } from "react";
import { Dialog } from "@mui/material";
import { Create, required, SimpleForm, TextInput } from "react-admin";

interface IDepartmentCreateDialogProps { 
    open: boolean
    onClose: () => void
}

export const DepartmentCreateDialog: FC<IDepartmentCreateDialogProps> = ({
    open,
    onClose
}) => (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <Create resource="Department">
            <SimpleForm>
                <TextInput source="name" validate={required()} />
            </SimpleForm>
        </Create>
    </Dialog>

);