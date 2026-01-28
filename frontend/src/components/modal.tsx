import CrossIcon from "../icons/cross"
import { Button } from "./Button"
import { Input } from "./Input"

interface modalProps {
    open : boolean,
    onClose? : () => void
}

export function Modal({open, onClose} : modalProps){
    return <div>
        {open && <div className="h-screen w-screen bg-slate-500/60 top-0 left-0 flex justify-center items-center fixed z-50 px-4">
            <div className="flex flex-col justify-center w-full max-w-md">
              <span className="bg-white opacity-100 px-4 sm:px-8 rounded-md flex flex-col justify-between items-center w-full">
                <div className="flex items-center px-2 sm:px-4 py-3 w-full justify-between">
                <p className="font-sans text-base sm:text-lg font-medium text-black">Add Content</p>
                <div onClick={onClose} className="cursor-pointer">
                <CrossIcon/>
                </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col gap-2 w-full">
                <Input placeholder="title"/>
                <Input placeholder="link"/>
                </div>
                <div className="flex flex-col sm:flex-row py-2 gap-2 w-full px-4 sm:px-0 sm:w-auto">
                    <Button variant="primary" size="sm" text="Youtube"/>
                    <Button variant="primary" size="sm" text="Twitter"/>
                </div>
                <div className="p-4 w-full">
                    <Button variant="secondary" size="md" text="Add" manualStyle="w-full sm:w-80"/>
                </div>
              </span>
            </div>
        </div>}
    </div>
}