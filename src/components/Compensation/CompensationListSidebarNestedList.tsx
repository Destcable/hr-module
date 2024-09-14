import NestedList from "../../core/components/NestedList/NestedList";
import { NestedListItem } from "../../core/components/NestedList/NestedListItem";
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import Collapse from '@mui/material/Collapse';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import { List } from "@mui/material";
import { FC } from "react";

export interface ICompensationListSidebarNestedListProps {
    isOpenItemInProgress: boolean 
    isOpenItemCompleted: boolean
    onClickOpenItemInProgress: () => void
    onClickOpenItemCompleted: () => void
}

export const CompensationListSidebarNestedList: FC<ICompensationListSidebarNestedListProps> = ({
    isOpenItemInProgress,
    isOpenItemCompleted,
    onClickOpenItemInProgress,
    onClickOpenItemCompleted
}) => {

    return (
        <NestedList>
            <NestedListItem icon={<DatasetOutlinedIcon />} text="Все формы" />

            <NestedListItem
                icon={<AccessTimeOutlinedIcon />}
                text="В ходе выполнения"
                nested={true} isOpen={isOpenItemInProgress}
                onClick={onClickOpenItemInProgress}
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
                onClick={onClickOpenItemCompleted}
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
    )
};