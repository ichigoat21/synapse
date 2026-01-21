import { useState } from "react"
import { Button } from "./components/Button"
import Card from "./components/Card"
import { Modal } from "./components/modal"
import PlusIcon from "./icons/plusicon"
import { ShareIcon } from "./icons/shareicon"

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  function modalHandler(){
    setModalOpen(!modalOpen)
  }
  return <div className="inset-0 h-screen bg-bgwhite">
    <Button onclick={()=>{modalHandler()}} variant="primary" size="md" text="Add Content"/>
    <Modal onClose={modalHandler} open={modalOpen}/>
  </div>
}

export default App
