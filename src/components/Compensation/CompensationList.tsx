import { List } from "react-admin";
import { CompensationListFilterSidebar } from "./CompensationListFilterSidebar";

const CompensationList = () => {
    return (
        <List aside={<CompensationListFilterSidebar />}>
            <span>123</span>
        </List>
    )
};

export default CompensationList;