import { lazy } from "react"

const MasterDataList = lazy(() => import("./MasterDataList"))

export const MasterDataResource = {
    name: "MasterData", 
    list: <MasterDataList />,
}