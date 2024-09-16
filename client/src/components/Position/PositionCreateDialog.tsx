import { Dialog } from "@mui/material";
import { FC } from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

interface IPositionCreateDialogProps { 
    open: boolean
    onClose: () => void
}

const PositionCreateDialog: FC<IPositionCreateDialogProps> = ({ 
    open,
    onClose
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Create resource="Position">
                <SimpleForm>
                    <TextInput source="name" validate={required()} />
                </SimpleForm>
            </Create>
        </Dialog>
    )
};

export default PositionCreateDialog;