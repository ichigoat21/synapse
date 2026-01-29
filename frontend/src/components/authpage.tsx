import { Button } from "./Button"
import { Input } from "./Input"
import { MainIcon } from "../icons/brainly"

interface authProps {
    isSignin? : Boolean
}

export function AuthPage({isSignin} : authProps){
    return <div className="flex  justify-center items-center h-screen">
        <div className="px-4 py-16 flex flex-col justify-center gap-6 border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300">
        <div className="flex justify-center items-center">
        <MainIcon size="sm"/>
         <p className="font-semibold text-lg tracking-tight">
        Synapse
        </p>
        </div>
        <div className="flex justify-center">
        <p className=" text-sm tracking-tight">
            Works like your second brain.
        </p>
        </div>
        <div className="flex flex-col gap-4">
            <Input size="md" placeholder="Username"/>
            <Input size="md" placeholder="Password"/>
        </div>
        <div className="flex justify-center">
            <Button variant="primary" size="md" text={isSignin ? "Sign In" : "Sign Up"} manualStyle="w-full"/>
        </div>
        </div>
    </div>
}