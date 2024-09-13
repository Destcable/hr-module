// import { FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from '@mui/material';
import NestedList from "../../core/components/Nested/NestedList";



export const CompensationListFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 300 }}>
        <CardContent>
            <NestedList />
        </CardContent>
    </Card>
);