import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { LogoImg } from "../logo/logo";


export function LandingPage(){
    const navigate = useNavigate()
    return <div>
    <header>
        <div className="flex items-center justify-between mt-10 mx-5 md:mx-20">
            <p className="font-display text-2xl md:text-3xl">Synapse</p>
            <Button variant="primary" size="md" text="Get Started" onclick={()=> {
                navigate("/signup")
            }}/>
        </div>
    </header>
    <main>
        <div className="flex justify-between items-center mx-60 mt-20">
            <p className="font-display text-5xl">
                Never worry about forgetting 
                <br />
                Your highlights from the Internet
            </p>
            <div>
                <LogoImg/>
            </div>
        </div>
    </main>
    <footer>

    </footer>
    </div>
}