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
    <div className="w-screen flex items-center justify-between ">
      <div className="p-12">
        <p className="font-sans text-2xl font-Arimo font-bold">All Notes</p>
      </div>
      <div className="flex items-center gap-6 p-12">
      <Button onclick={()=>{modalHandler()}} variant="primary" size="md" text="Add Content"/>
      <Button onclick={()=>{modalHandler()}} variant="secondary" size="md" text="Share Brain"/>
      </div>
    </div>
    <Modal onClose={modalHandler} open={modalOpen}/>
  </div>
}

export default App
