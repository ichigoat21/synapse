import { MainIcon } from "../icons/brainly";
import { TwTicon } from "../icons/twitter";
import { YTicon } from "../icons/youtube";
import {  SideListComponent } from "./SIdeList";

export function Sidebar(){
    return <div className="h-screen w-88 bg-white fixed left-0 top-0 shadow-lg border-r border-gray-200">
        <div className="flex items-centern px-15 py-8 justify-center gap-3">
            <MainIcon/>
            <p className="text-4xl">Synapse</p>
        </div>
        <div>
            <SideListComponent icon={<YTicon/>} text="Youtube"/>
            <SideListComponent icon={<TwTicon/>} text="Twitter"/>
        </div>
    </div>
}