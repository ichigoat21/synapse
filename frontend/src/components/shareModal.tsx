import { useState } from "react"

interface ShareModalProps {
    isOpen: boolean
    onClose: () => void
    shareLink: string
}

export function ShareModal({ isOpen, onClose, shareLink }: ShareModalProps) {
    const [copied, setCopied] = useState(false)

    if (!isOpen) return null

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareLink)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>

            <div className="bg-white border border-[#e8e8e4] rounded-2xl w-full max-w-sm shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0ec]">
                    <p
                        style={{ fontFamily: "'Fraunces', serif" }}
                        className="text-base font-light text-[#1a1a1a] tracking-tight"
                    >
                        Share your brain
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
                    <p className="text-xs text-[#aaa] font-light leading-relaxed">
                        Anyone with this link can view your saved content.
                    </p>

                    {/* Link row */}
                    <div className="flex items-center gap-2 bg-[#f8f8f6] border border-[#e8e8e4] rounded-full px-4 py-2.5">
                        <p className="flex-1 text-xs text-[#888] truncate">{shareLink}</p>
                        <button
                            onClick={copyToClipboard}
                            className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full transition-all
                                ${copied
                                    ? "bg-green-100 text-green-600"
                                    : "bg-[#1a1a1a] text-[#f8f8f6] hover:opacity-80"
                                }`}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <button
                        onClick={onClose}
                        className="w-full border border-[#1a1a1a]/15 text-[#1a1a1a] text-sm py-3 rounded-full
                            hover:border-[#1a1a1a]/40 transition-all"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}