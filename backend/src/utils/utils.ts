export default function random(len : number){
    const str = "sh02uohr20-2rlhlkfw"
    const length = str.length
    let opt = ""
    for (let i = 0; i < len; i++){
        opt += str[Math.floor(Math.random()) * length]
    }
    return opt
}