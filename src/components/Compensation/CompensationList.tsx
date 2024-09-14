import { List } from "react-admin";
import { CompensationListSidebar } from "./CompensationListSidebar";
import { CompensationListCreateFolderCompletedDialog } from "./CompensationListCreateFolderCompletedDialog";
import { useState } from "react";

const CompensationList = () => {
    const [isOpenCreateFolderCompletedDialog, setOpenCreateFolderCompletedDialog] = useState(false);
    const [isOpenItemInProgress, setOpenItemInProgress] = useState(true);
    const [isOpenItemCompleted, setOpenItemCompleted] = useState(true);

    const handleClickOpenItemInProgress = () => setOpenItemInProgress(!isOpenItemInProgress);
    const handleClickOpenItemCompleted = () => setOpenItemCompleted(!isOpenItemCompleted);
    const handleCloseCreateFolderCompletedDialog = () => setOpenCreateFolderCompletedDialog(false);

    return (
        <>
            <List
                aside={<CompensationListSidebar
                    isOpenItemCompleted={isOpenItemCompleted}
                    isOpenItemInProgress={isOpenItemInProgress}
                    onClickOpenItemCompleted={handleClickOpenItemCompleted}
                    onClickOpenItemInProgress={handleClickOpenItemInProgress}
                />}
            >
                <span>123</span>
            </List>
            <CompensationListCreateFolderCompletedDialog 
                isOpen={isOpenCreateFolderCompletedDialog} 
                onClose={handleCloseCreateFolderCompletedDialog} 
            />
        </>
    )
};

export default CompensationList;