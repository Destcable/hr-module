import { createDepartment } from './Department/resolvers/Mutation/createDepartment.js';
import { deleteDepartment } from './Department/resolvers/Mutation/deleteDepartment.js';
import { _allDepartmentsMeta, allDepartments } from './Department/resolvers/Query/allDepartments.js';
import { createPosition } from './Position/resolvers/Mutation/createPosition.js';
import { _allPositionsMeta, allPositions } from './Position/resolvers/Query/allPositions.js';

export const Query = {
    allDepartments,
    _allDepartmentsMeta,
    allPositions,
    _allPositionsMeta
}

export const Mutation = {
    createDepartment,
    deleteDepartment,
    createPosition
}