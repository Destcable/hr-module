import { lazy } from "react"

const DepartmentList = lazy(() => import("./DepartmentList"))
const DepartmentCreate = lazy(() => import("./DepartmentCreate"))

export const DepartmentResource = {
    name: "Department", 
    list: <DepartmentList />,
    create: <DepartmentCreate />
}