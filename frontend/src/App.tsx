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
  
  return <div className="inset-0 min-h-screen bg-bgwhite">
    <div>
      <Sidebar/>
    </div>
    

    <div className="md:ml-64 lg:ml-92">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 p-4 sm:p-8 md:p-12">
        <div>
          <p className="font-sans text-xl sm:text-2xl font-Arimo font-bold">All Notes</p>
        </div>
        
        <div className="flex flex-row sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button onclick={()=>{modalHandler()}} variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon/>}/>
          <Button onclick={()=>{modalHandler()}} variant="primary" size="md" text="Add Content" startIcon={<PlusIcon/>}/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 md:px-12 pb-8">
        <Card title="first video" link="https://youtu.be/FpOcxFBzCow?si=Ko2Yfpkr4286QZka" type="Youtube"/>
        <Card title="first tweet" link="https://x.com/thecinelost/status/2014173675457745136?s=20" type="Twitter"/>
      </div>
    </div>
    
    <Modal onClose={modalHandler} open={modalOpen}/>
  </div>
}

export default App