import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthPage } from "./components/authpage"
import { SignIn } from "./pages/signin"
import { SignUp } from "./pages/signup"
import { Dashboard } from "./pages/dashboard"


function App() {
  return <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
}

export default App
