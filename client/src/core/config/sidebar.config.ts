import { CompensationResource } from "../../components/Compensation";
import { HomePageResource } from "../../components/HomePage";
import { MasterDataResource } from "../../components/MasterData";

export const sidebarItems = [
    {...HomePageResource},
    {...CompensationResource},
    {...MasterDataResource}
];