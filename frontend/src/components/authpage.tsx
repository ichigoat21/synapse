import { Button } from "./Button"
import { Input } from "./Input"
import { MainIcon } from "../icons/brainly"
import { useRef } from "react"
import axios from "axios"
import { HTTP_BACKEND } from "../backendUrl/config"
import { useNavigate } from "react-router-dom"

interface authProps {
    isSignin? : Boolean
}

export function AuthPage({isSignin} : authProps){
    const usernameRef = useRef<HTMLInputElement| null>(null)
    const passwordRef = useRef<HTMLInputElement| null>(null)
    const navigate = useNavigate()

    async function sendCredentials (){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!isSignin){
            const response = await axios.post(`${HTTP_BACKEND}/users/signup`, {
                username,
                password
            })
            if(response.data.message === "You are signed up"){
                navigate("/signin")
            }
        } else {
            const response = await axios.post(`${HTTP_BACKEND}/users/signin`, {
                username,
                password
            })
            if(response.data.message === "You are signed in"){
                const token = response.data.token
                localStorage.setItem("token", token)
                navigate("/dashboard")
            }
        }
       
    }
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
            <Input reference={usernameRef} size="md" placeholder="Username"/>
            <Input reference={passwordRef} size="md" placeholder="Password"/>
        </div>
        <div className="flex justify-center">
            <Button onclick={sendCredentials} variant="primary" size="md" text={isSignin ? "Sign In" : "Sign Up"} manualStyle="w-full"/>
        </div>
        </div>
    </div>
}