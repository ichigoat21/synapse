import { Button } from "./components/Button"
import Card from "./components/Card"
import PlusIcon from "./icons/plusicon"
import { ShareIcon } from "./icons/shareicon"

function App() {
  return <div className="w-screen h-screen bg-bgwhite">
    <Button text="Add Content" variant="primary" size="md" startIcon={<PlusIcon/>}/>
    <Button text="Share Brain" variant="secondary" size="md" startIcon={<ShareIcon/>}/>
    <Card/>
  </div>
}

export default App
