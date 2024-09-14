import { List } from "react-admin";
import { CompensationListSidebar } from "./CompensationListSidebar";

const CompensationList = () => {
    return (
        <List aside={<CompensationListSidebar />}>
            <span>123</span>
        </List>
    )
};

export default CompensationList;