import { lazy } from "react"

const DepartmentList = lazy(() => import("./DepartmentList"))

export const DepartmentResource = {
    name: "Department", 
    list: <DepartmentList />
}