import CrossIcon from "../icons/cross"
import { Input } from "./Input"

interface modalProps {
    open : boolean,
    onClose? : () => void
}

export function Modal({open, onClose} : modalProps){
    return <div>
        {open && <div className="h-screen w-screen bg-slate-500/60  flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 px-8 rounded-md flex flex-col justify-between items-center">
                <div className="flex items-center px-4 py-3 w-full justify-between">
                <p className="font-sans text-lg font-medium text-black">Add Content</p>
                <CrossIcon/>
                </div>
                <div className="p-6 flex flex-col gap-2">
                <Input placeholder="title"/>
                <Input placeholder="link"/>
                </div>
              </span>
            </div>
        </div>}
    </div>
}