import { useState } from "react";
import { MasterDataListMenu } from "./MasterDataListMenu";
import DepartmentList from "../Department/DepartmentList";
import PositionList from "../Position/PositionList";

const MasterDataList = ( ) => { 
    const [resource, setResource] = useState<string>("Department");

    const handleClickDepartment = () => setResource("Department");
    const handleClickPosition = () => setResource("Position");

    return(
        <>
            <MasterDataListMenu 
                onClickDepartment={handleClickDepartment}
                onClickPosition={handleClickPosition}
            />

                {resource === "Department" && <DepartmentList />}
                {resource === "Position" && <PositionList />}
        </>
    )
};

export default MasterDataList;