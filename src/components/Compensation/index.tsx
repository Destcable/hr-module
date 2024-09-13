import { lazy } from "react"

const CompensationList = lazy(() => import("./CompensationList"))

export const CompensationResource = {
    name: "Compensation", 
    list: <CompensationList />
}