import { Card, CardContent } from '@mui/material';
import { CompensationListSidebarNestedList } from './CompensationListSidebarNestedList';



export const CompensationListSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 300 }}>
        <CardContent>
            <CompensationListSidebarNestedList />
        </CardContent>
    </Card>
);