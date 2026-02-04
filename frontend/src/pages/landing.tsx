import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { LogoImg } from "../logo/logo"

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
            <Button variant="secondary" text="Sign Up" size="md"/>
            <Button variant="secondary" text="Log In" size="md"/>
          </div>
        </main>
  
        <footer className="w-full bg-black py-6 flex items-center justify-center">
          <p className="text-white text-sm">Developed by shiv</p>
        </footer>
      </div>
    )
  }
  