import { useState } from "react"
import { Button } from "./components/Button"
import Card from "./components/Card"
import { Modal } from "./components/modal"
import PlusIcon from "./icons/plusicon"
import { ShareIcon } from "./icons/shareicon"
import { Sidebar } from "./components/Sidebar"

function App() {
  const [modalOpen, setModalOpen] = useState(true)

  function modalHandler(){
    setModalOpen(!modalOpen)
  }
  return <div className="inset-0 h-screen bg-bgwhite">
        <div>
      <Sidebar/>
    </div>
    <div className=" flex items-center justify-between ml-72">
      <div className="p-12">
        <p className="font-sans text-2xl font-Arimo font-bold">All Notes</p>
      </div>
      <div className="flex items-center gap-6 p-12">
      <Button onclick={()=>{modalHandler()}} variant="secondary" size="md" text="Share Brain"/>
      <Button onclick={()=>{modalHandler()}} variant="primary" size="md" text="Add Content"/>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4 px-12 ml-80 items-start">
      <Card title="first video" link="https://youtu.be/FpOcxFBzCow?si=Ko2Yfpkr4286QZka" type="Youtube"/>
      <Card title="first tweet" link="https://x.com/thecinelost/status/2014173675457745136?s=20" type="Twitter"/>
    </div>
    <Modal onClose={modalHandler} open={modalOpen}/>
  </div>
}

export default App
