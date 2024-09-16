import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { FC } from "react";

 interface ICompensationListCreateFolderCompletedDialogProps {
    isOpen: boolean
    onClose?: () => void
}

export const CompensationListCreateFolderCompletedDialog:
    FC<ICompensationListCreateFolderCompletedDialogProps> = ({
        isOpen,
        onClose
    }) => {
        return (
            <Dialog
                open={isOpen}
                onClose={onClose}
            // PaperProps={{
            //     component: 'form',
            //     onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            //         event.preventDefault();
            //         const formData = new FormData(event.currentTarget);
            //         const formJson = Object.fromEntries((formData as any).entries());
            //         const email = formJson.email;
            //         console.log(email);
            //         handleClose();
            //     },
            // }}
            >
                <DialogTitle>Создание папки</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Название папки"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button>Создать</Button>
                    <Button>Отмена</Button>
                </DialogActions>
            </Dialog>
        )
    };