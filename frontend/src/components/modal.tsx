import CrossIcon from "../icons/cross"
import { Button } from "./Button"
import { Input } from "./Input"

interface modalProps {
    open : boolean,
    onClose? : () => void
}

export function Modal({open, onClose} : modalProps){
    return <div>
        {open && <div className="h-screen w-screen bg-slate-500/60  flex justify-center fixed">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 px-8 rounded-md flex flex-col justify-between items-center">
                <div className="flex items-center px-4 py-3 w-full justify-between">
                <p className="font-sans text-lg font-medium text-black">Add Content</p>
                <div onClick={onClose}>
                <CrossIcon/>
                </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                <Input placeholder="title"/>
                <Input placeholder="link"/>
                </div>
                <div className="flex py-2 gap-2">
                    <Button variant="primary" size="sm" text="Youtube"/>
                    <Button variant="primary" size="sm" text="Twitter"/>
                </div>
                <div className="p-4">
                    <Button variant="secondary" size="md" text="Add" manualStyle="w-80"/>
                </div>
              </span>
            </div>
        </div>}
    </div>
}