interface inputProps {
    placeholder : string,
    onchange? : ()=> void,
    size : "sm" | "md"
}

const sizeStyles = {
    "md" : "w-full",
    "sm" : "w-3/5"
}

export function Input({placeholder, onchange, size} : inputProps){
    return <input 
        className={`${sizeStyles[size]} py-2 sm:py-3 px-2 rounded-md outline-textblue shadow-sm text-sm sm:text-base`}
        type="text" 
        placeholder={placeholder} 
        onChange={onchange} 
    />
}