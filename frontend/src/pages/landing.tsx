import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { LogoImg } from "../logo/logo"
import { GitIcon } from "../icons/github"
import { TwTicon } from "../icons/twitter"

export function LandingPage() {
    const navigate = useNavigate()
  
    return (
      <div className="min-h-screen flex flex-col">
        <header>
          <div className="flex items-center justify-between mt-10 mx-5 md:mx-20">
            <p className="font-display text-2xl md:text-3xl">Synapse</p>
            <Button
              variant="primary"
              size="md"
              text="Get Started"
              onclick={() => navigate("/signup")}
            />
          </div>
        </header>
  
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mx-10 md:mx-60 mt-20">
            <div>
              <LogoImg />
            </div>
            <p className="font-display text-3xl md:text-5xl text-center sm:text-left">
              Never worry about forgetting
              <br />
              Your highlights from the Internet
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-20">
            <Button 
            variant="primary" 
            text="Sign Up" 
            size="md"
            onclick={() => navigate("/signup")}
            />
            <Button 
            variant="secondary" 
            text="Log In" 
            size="md"
            onclick={() => navigate("/signin")}
            />
          </div>
        </main>
  
        <footer className="w-full bg-black  py-4 md:py-6 px-2 md:px-20 flex items-center justify-between">
          <div className="flex  items-center md:px-4">
          <p className="text-white text-xs">© 2026 Synapse. </p>
          </div>
          <p className="text-white text-xs">Developed by shiv</p>
          <div className="flex gap-2 items-center">
              <a href="https://github.com/ichigoat21/synapse" target="_blank"><GitIcon/></a>
              <a href="https://x.com/codegazer" target="_blank"><TwTicon/></a>
          </div>
        </footer>
      </div>
    )
  }
  