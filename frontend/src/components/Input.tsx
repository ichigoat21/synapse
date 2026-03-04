interface inputProps {
    placeholder: string
    onchange?: () => void
    size: "sm" | "md"
    reference: React.RefObject<HTMLInputElement | null>
    type?: string
}

const sizeStyles = {
    md: "w-full",
    sm: "w-3/5",
}

export function Input({ placeholder, onchange, size, reference, type = "text" }: inputProps) {
    return (
        <input
            ref={reference}
            className={`
                ${sizeStyles[size]}
                px-4 py-3 rounded-full
                bg-[#efefed] border border-[#e0e0dc]
                text-[#1a1a1a] text-sm placeholder-[#aaa]
                outline-none focus:border-[#1a1a1a]/40 focus:bg-white
                transition-all duration-200
            `}
            type={type}
            placeholder={placeholder}
            onChange={onchange}
        />
    )
}