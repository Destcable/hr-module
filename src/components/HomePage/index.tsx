import { lazy } from "react"

const HomePageList = lazy(() => import("./HomePageList"))

export const HomePageResource = {
    name: "Home", 
    list: <HomePageList />
}