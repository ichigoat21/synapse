import type { ReactElement } from "react"

interface buttonProps {
    text : string,
    manualStyle? : string,
    size : "sm" | "lg" | "md",
    variant : "primary" | "secondary",
    startIcon? : ReactElement,
    endIcon? : ReactElement,
    onclick? : () => void
}
const variantStyle = {
    "primary" : "bg-darkblue text-white hover:bg-indigo-500",
    "secondary" : "bg-lightblue text-darkblue hover:bg-blue-300"
}
const defaultStyle = "cursor-pointer rounded-md"

const sizeStyles = {
    "sm" : "px-2 py-1 text-xs sm:text-sm",
    "md" : "px-3 py-2 sm:px-4 sm:py-2 w-32 sm:w-40 h-10 sm:h-12 text-sm sm:text-base",
    "lg" : "px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg"
}

export function Button (props : buttonProps) {
    return <button
    onClick={props.onclick}
    className={`flex items-center justify-center gap-1
      ${props.manualStyle}
      ${variantStyle[props.variant]}
      ${defaultStyle}
      ${sizeStyles[props.size]}`}
  >
    {props.startIcon}
    {props.text}
    {props.endIcon}
  </button>
}