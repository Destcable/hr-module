import { Card, CardContent } from '@mui/material';
import { CompensationListSidebarNestedList, ICompensationListSidebarNestedListProps } from './CompensationListSidebarNestedList';
import { FC } from 'react';

interface ICompensationListSidebarProps extends ICompensationListSidebarNestedListProps { }

export const CompensationListSidebar: FC<ICompensationListSidebarProps> = (props) => (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 300 }}>
        <CardContent>
            <CompensationListSidebarNestedList {...props}/>
        </CardContent>
    </Card>
);