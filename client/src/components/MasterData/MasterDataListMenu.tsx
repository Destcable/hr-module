import { FC } from "react";
import NestedList from "../../core/components/NestedList/NestedList";
import { NestedListItem } from "../../core/components/NestedList/NestedListItem";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

interface IDepartmentListActionsProps {
    onClickDepartment: () => void;
    onClickPosition: () => void;
}

export const MasterDataListMenu: FC<IDepartmentListActionsProps> = ({
    onClickDepartment,
    onClickPosition,
}) => (
    <NestedList sx={{
        width: '100%', 
        maxWidth: 360, 
        display: 'flex',
        flexDirection: 'row'
    }}>
        <NestedListItem 
            onClick={onClickDepartment}
            icon={<BusinessOutlinedIcon />} 
            text="Отделы" 
        />
        <NestedListItem 
            onClick={onClickPosition}
            icon={<WorkOutlineOutlinedIcon />} 
            text="Должности"
        />

    </NestedList>
);