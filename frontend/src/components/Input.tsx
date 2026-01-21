interface inputProps {
    placeholder : string,
    onchange? : ()=> void
}

export function Input({placeholder, onchange} : inputProps){
    return <input className="py-3 px-2 rounded-md outline-textblue shadow-sm" type="text" placeholder={placeholder} onChange={onchange} />
} 