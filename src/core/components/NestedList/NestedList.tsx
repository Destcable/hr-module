import { FC, ReactNode } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';


interface INestedListProps {
    label?: string,
    children: ReactNode
}

const NestedList: FC<INestedListProps> = ({
    label,
    children
}) => {
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
            {children}
        </List>
    );
};

export default NestedList;