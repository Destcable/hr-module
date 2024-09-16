import { FC } from "react";
import { CreateButton, ExportButton, TopToolbar } from "react-admin";

interface IDepartmentListActionsProps { 
    onClick: () => void
}

export const DepartmentListActions: FC<IDepartmentListActionsProps> = ({
    onClick
}) => (
    <TopToolbar >
        <CreateButton onClick={onClick} to={''} />
        <ExportButton />
    </TopToolbar>
);