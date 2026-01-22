import type { ReactElement } from "react"
import { ShareIcon } from "../icons/shareicon"

interface listProps{
    icon : ReactElement,
    text : string
}

export function SideListComponent({icon, text} : listProps){
    return <div className="px-12 py-3 my-3 w-4/5 mx-10 bg-gray-100 hover:bg-gray-200 rounded-md overflow-hidden flex items-center justify-start gap-2">
        {icon}
        <p>{text}</p>
    </div>
}