interface inputProps {
    placeholder : string,
    onchange? : ()=> void
}

export function Input({placeholder, onchange} : inputProps){
    return <input 
        className="py-2 sm:py-3 px-2 rounded-md outline-textblue shadow-sm w-full text-sm sm:text-base" 
        type="text" 
        placeholder={placeholder} 
        onChange={onchange} 
    />
}