import type { ReactElement } from "react"

interface listProps {
    icon: ReactElement
    text: string
    onClick?: () => void
    active?: boolean
}

export function SideListComponent({ icon, text, onClick, active }: listProps) {
    return (
        <div
            onClick={onClick}
            className={`
                flex items-center gap-3 px-4 py-2.5 rounded-full cursor-pointer
                transition-all text-sm font-medium
                ${active
                    ? "bg-[#1a1a1a] text-[#f8f8f6]"
                    : "text-[#555] hover:bg-[#efefed] hover:text-[#1a1a1a]"
                }
            `}
        >
            <span className="w-4 h-4 flex items-center justify-center shrink-0">{icon}</span>
            <span>{text}</span>
        </div>
    )
}