import type { ReactElement } from "react"

interface buttonProps {
    text: string
    manualStyle?: string
    size: "sm" | "lg" | "md"
    variant: "primary" | "secondary"
    startIcon?: ReactElement
    endIcon?: ReactElement
    onclick?: () => void
}

const variantStyle = {
    primary: "bg-[#1a1a1a] text-[#f8f8f6] hover:opacity-80",
    secondary: "bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/20 hover:border-[#1a1a1a]/50",
}

const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
}

export function Button(props: buttonProps) {
    return (
        <button
            onClick={props.onclick}
            className={`
                flex items-center justify-center gap-2 rounded-full font-medium
                transition-all hover:-translate-y-px whitespace-nowrap
                ${variantStyle[props.variant]}
                ${sizeStyles[props.size]}
                ${props.manualStyle ?? ""}
            `}
        >
            {props.startIcon}
            {props.text}
            {props.endIcon}
        </button>
    )
}