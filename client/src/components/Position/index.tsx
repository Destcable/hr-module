import { lazy } from "react"

const PositionList = lazy(() => import("./PositionList"))

export const PositionResource = {
    name: "Position", 
    list: <PositionList />,
}