import brainIcon from  "../../public/brain.png"

interface MainiconProps {
    size : "sm" | "default"
}

const sizeStyles = {
    "sm" : "w-5 h-5",
    "default" :"w-10 h-10 pt-1"
}


export function MainIcon({size} : MainiconProps){

const classes = sizeStyles[size] ?? sizeStyles.default
    return <img className={classes} src={brainIcon} alt="brain-icon" />
}