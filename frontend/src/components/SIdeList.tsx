import type { ReactElement } from "react"


interface listProps{
    icon : ReactElement,
    text : string,
    onClick? : ()=> void
}

export function SideListComponent({icon, text, onClick} : listProps){
    return <div onClick={onClick} className="px-6 lg:px-12 py-2 lg:py-3 my-2 lg:my-3 w-11/12 lg:w-4/5 mx-4 lg:mx-10 bg-gray-100 hover:bg-gray-200 rounded-md overflow-hidden flex items-center justify-start gap-2">
        <div className="scale-90 lg:scale-100">
            {icon}
        </div>
        <p className="text-sm lg:text-base">{text}</p>
    </div>
}