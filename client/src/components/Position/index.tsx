import { lazy } from "react"

const PositionList = lazy(() => import("./PositionList"))
const PositionCreate = lazy(() => import("./PositionCreate"))

export const PositionResource = {
    name: "Position", 
    list: <PositionList />,
    create: <PositionCreate />
}