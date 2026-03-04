import { useRef, useState } from "react"
import { Input } from "./Input"
import axios from "axios"
import { HTTP_BACKEND } from "../backendUrl/config"

interface modalProps {
    open: boolean
    onClose?: () => void
}

export function Modal({ open, onClose }: modalProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState<"Youtube" | "Twitter">("Youtube")
    const [loading, setLoading] = useState(false)

    async function sendContent() {
        const title = titleRef.current?.value
        const link = linkRef.current?.value
        if (!title || !link) return

        setLoading(true)
        await axios.post(`${HTTP_BACKEND}/contents/add`,
            { title, link, type },
            { headers: { Authorization: localStorage.getItem("token") } }
        )
        setLoading(false)
        onClose?.()
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>

            <div className="bg-white border border-[#e8e8e4] rounded-2xl w-full max-w-sm shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0ec]">
                    <p
                        style={{ fontFamily: "'Fraunces', serif" }}
                        className="text-base font-light text-[#1a1a1a] tracking-tight"
                    >
                        Add Content
                    </p>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0f0ec] transition-colors text-[#aaa] hover:text-[#1a1a1a] text-lg leading-none"
                    >
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col gap-4">
                    <Input reference={titleRef} size="md" placeholder="Title" />
                    <Input reference={linkRef} size="md" placeholder="Link" />

                    {/* Type toggle */}
                    <div className="flex gap-2">
                        {(["Youtube", "Twitter"] as const).map(t => (
                            <button
                                key={t}
                                onClick={() => setType(t)}
                                className={`flex-1 py-2 rounded-full text-xs font-medium transition-all
                                    ${type === t
                                        ? "bg-[#1a1a1a] text-[#f8f8f6]"
                                        : "bg-[#efefed] text-[#888] hover:text-[#1a1a1a]"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <button
                        onClick={sendContent}
                        disabled={loading}
                        className="w-full bg-[#1a1a1a] text-[#f8f8f6] text-sm font-medium py-3 rounded-full
                            hover:opacity-80 transition-all disabled:opacity-50"
                    >
                        {loading ? "Adding..." : "Add"}
                    </button>
                </div>
            </div>
        </div>
    )
}