import { MainIcon } from "../icons/brainly";
import { TwTicon } from "../icons/twitter";
import { YTicon } from "../icons/youtube";
import {  SideListComponent } from "./SIdeList";

export function Sidebar(){
    return <div className="hidden md:block h-screen w-64 lg:w-88 bg-white fixed left-0 top-0 shadow-lg border-r border-gray-200 z-40">
        <div className="flex items-center px-8 lg:px-15 py-6 lg:py-8 justify-center gap-2 lg:gap-3">
            <div className="scale-75 lg:scale-100">
                <MainIcon/>
            </div>
            <p className="text-2xl lg:text-4xl">Synapse</p>
        </div>
        <div>
            <SideListComponent icon={<YTicon/>} text="Youtube"/>
            <SideListComponent icon={<TwTicon/>} text="Twitter"/>
        </div>
    </div>
}