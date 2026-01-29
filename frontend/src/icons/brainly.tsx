import brainIcon from  "../../public/brain.png"

interface MainiconProps {
    size : "sm" | "default"
}

const sizeStyles = {
    "sm" : "w-5 h-5",
    "default" :"w-10 h-10 pt-1"
}

export function MainIcon({size} : MainiconProps){
    return <img className={`${sizeStyles[size]}`} src={brainIcon} alt="brain-icon" />
}