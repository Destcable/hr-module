import { FC } from "react";
import { CreateButton, ExportButton, TopToolbar } from "react-admin";

interface IPositionListActionsProps { 
    onClick: () => void
}

export const PositionListActions: FC<IPositionListActionsProps> = ({
    onClick
}) => (
    <TopToolbar >
        <CreateButton onClick={onClick} to={''} />
        <ExportButton />
    </TopToolbar>
);