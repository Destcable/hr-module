import { FC, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';

interface INestedListProps {
    label?: string
}

const NestedList: FC<INestedListProps> = ({
    label
}) => {
    const [isOpenItemInProgress, setOpenItemInProgress] = useState(true);
    const [isOpenItemCompleted, setOpenItemCompleted] = useState(true);

    const handleClickOpenItemInProgress = () => setOpenItemInProgress(!isOpenItemInProgress);
    const handleClickOpenItemCompleted = () => setOpenItemCompleted(!isOpenItemCompleted);

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={label
                ? <ListSubheader component="div" id="nested-list-subheader">{label}</ListSubheader>
                : null
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <DatasetOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Все формы" />
            </ListItemButton>

            <ListItemButton onClick={handleClickOpenItemInProgress}>
                <ListItemIcon>
                    <AccessTimeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="В ходе выполнения" />
                {isOpenItemInProgress ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>


            <Collapse in={isOpenItemInProgress} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} color='blue'>
                        <ListItemIcon>
                            <SourceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Входящие" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <SourceOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ожидание" />
                    </ListItemButton>
                </List>
            </Collapse>


            <ListItemButton onClick={handleClickOpenItemCompleted}>
                <ListItemIcon>
                    <DomainVerificationOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Завершенные" />
                {isOpenItemCompleted ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>


            <Collapse in={isOpenItemCompleted} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <CreateNewFolderOutlinedIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText
                            primary="Создать папку"
                            primaryTypographyProps={{
                                color: 'primary',
                            }} />
                    </ListItemButton>
                </List>
            </Collapse>


        </List>
    );
};

export default NestedList;