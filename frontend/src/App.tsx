import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/signin"
import { SignUp } from "./pages/signup"
import { Dashboard } from "./pages/dashboard"
import { ShareBoard } from "./pages/share"


function App() {
  return <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/signin" element={<SignIn/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/:id" element={<ShareBoard/>}></Route>
            </Routes>
        </BrowserRouter>
}

export default App
