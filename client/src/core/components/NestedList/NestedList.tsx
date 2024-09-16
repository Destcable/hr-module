import { FC, ReactNode } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { SxProps } from '@mui/material';


interface INestedListProps {
    label?: string,
    children: ReactNode,
    sx?: SxProps
}

const NestedList: FC<INestedListProps> = ({
    label,
    children,
    sx
}) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', ...sx }}
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