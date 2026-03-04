import { Input } from "./Input"
import { useRef, useState } from "react"
import axios from "axios"
import { HTTP_BACKEND } from "../backendUrl/config"
import { useNavigate } from "react-router-dom"

interface authProps {
    isSignin?: boolean
}

export function AuthPage({ isSignin }: authProps) {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function sendCredentials() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        if (!username || !password) {
            setError("Username and password are required")
            return
        }

        setError(null)
        setLoading(true)

        try {
            if (!isSignin) {
                await axios.post(`${HTTP_BACKEND}/users/signup`, { username, password })
                navigate("/signin")
            } else {
                const response = await axios.post(`${HTTP_BACKEND}/users/signin`, { username, password })
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Something went wrong")
            } else {
                setError("Unexpected error occurred")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-[#f8f8f6]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');`}</style>

            <div className="w-full max-w-sm mx-4 flex flex-col gap-6 bg-white border border-[#e8e8e4] rounded-2xl px-8 py-10 shadow-sm">

                {/* Logo */}
                <div className="flex flex-col items-center gap-1 mb-2">
                    <span
                        style={{ fontFamily: "'Fraunces', serif" }}
                        className="text-2xl font-light tracking-tight text-[#1a1a1a]"
                    >
                        Synapse
                    </span>
                    <p className="text-xs text-[#aaa] font-light tracking-wide">
                        your second brain
                    </p>
                </div>

                {/* Heading */}
                <p
                    style={{ fontFamily: "'Fraunces', serif" }}
                    className="text-center text-lg font-light text-[#1a1a1a]"
                >
                    {isSignin ? "Welcome back." : "Create an account."}
                </p>

                {/* Inputs */}
                <div className="flex flex-col gap-3">
                    <Input reference={usernameRef} size="md" placeholder="Username" />
                    <Input reference={passwordRef} size="md" placeholder="Password" type="password" />
                </div>

                {/* Error */}
                {error && (
                    <div className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                        {error}
                    </div>
                )}

                {/* Submit */}
                <button
                    onClick={sendCredentials}
                    disabled={loading}
                    className="w-full bg-[#1a1a1a] text-[#f8f8f6] text-sm font-medium py-3 rounded-full
                        hover:opacity-80 hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "..." : isSignin ? "Sign In" : "Sign Up"}
                </button>

                {/* Switch */}
                <p className="text-center text-xs text-[#aaa]">
                    {isSignin ? "Don't have an account? " : "Already have an account? "}
                    <span
                        onClick={() => navigate(isSignin ? "/signup" : "/signin")}
                        className="text-[#1a1a1a] underline underline-offset-2 cursor-pointer hover:opacity-60 transition-opacity"
                    >
                        {isSignin ? "Sign up" : "Sign in"}
                    </span>
                </p>
            </div>
        </div>
    )
}