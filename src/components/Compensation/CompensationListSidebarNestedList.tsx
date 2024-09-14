import { useState } from "react";
import NestedList from "../../core/components/NestedList/NestedList";
import { NestedListItem } from "../../core/components/NestedList/NestedListItem";
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import Collapse from '@mui/material/Collapse';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import { List } from "@mui/material";

export const CompensationListSidebarNestedList = () => {
    const [isOpenItemInProgress, setOpenItemInProgress] = useState(true);
    const [isOpenItemCompleted, setOpenItemCompleted] = useState(true);

    const handleClickOpenItemInProgress = () => setOpenItemInProgress(!isOpenItemInProgress);
    const handleClickOpenItemCompleted = () => setOpenItemCompleted(!isOpenItemCompleted);
    return <NestedList>
        <NestedListItem icon={<DatasetOutlinedIcon />} text="Все формы" />

        <NestedListItem
            icon={<AccessTimeOutlinedIcon />}
            text="В ходе выполнения"
            nested={true} isOpen={isOpenItemInProgress}
            onClick={handleClickOpenItemInProgress}
        >
            <Collapse in={isOpenItemInProgress} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NestedListItem sx={{ pl: 4 }} icon={<SourceOutlinedIcon />} text="Входящие" />
                    <NestedListItem sx={{ pl: 4 }} icon={<SourceOutlinedIcon />} text="Ожидание" />
                </List>
            </Collapse>
        </NestedListItem>




        <NestedListItem
            icon={<DomainVerificationOutlinedIcon />}
            text="Завершенные"
            nested={true} isOpen={isOpenItemCompleted}
            onClick={handleClickOpenItemCompleted}
        >
            <Collapse in={isOpenItemCompleted} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    <NestedListItem
                        sx={{ pl: 4 }} text="Создать папку"
                        icon={<CreateNewFolderOutlinedIcon color="secondary" />}
                        typographyProps={{
                            color: 'primary',
                        }}
                    />



                </List>
            </Collapse>
        </NestedListItem>
    </NestedList>
};