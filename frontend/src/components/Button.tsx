import type { ReactElement } from "react"

interface buttonProps {
    text : string,
    size : "sm" | "lg" | "md",
    variant : "primary" | "secondary",
    startIcon? : ReactElement,
    endIcon? : ReactElement,
    onclick? : () => {}
}
const variantStyle = {
    "primary" : "bg-darkblue text-white hover:bg-indigo-500",
    "secondary" : "bg-lightblue text-darkblue hover:bg-blue-300"
}
const defaultStyle = "px-4 py-2 cursor-pointer w-40 h-12 rounded-md"

const sizeStyles = {
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}

export function Button (props : buttonProps) {
    return <div className={`flex items-center justify-center gap-1 ${variantStyle[props.variant]} ${defaultStyle} ${sizeStyles[props.size]}`}>
        {props.startIcon}
        {props.text}
        {props.endIcon}
    </div>
}