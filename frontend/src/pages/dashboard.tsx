import { useState } from "react"
import { MenuIcon } from "../icons/menuicon"
import { MainIcon } from "../icons/brainly"
import { Sidebar } from "../components/Sidebar"
import { Button } from "../components/Button"
import { ShareIcon } from "../icons/shareicon"
import PlusIcon from "../icons/plusicon"
import Card from "../components/Card"
import { Modal } from "../components/modal"

export function Dashboard(){
    const [modalOpen, setModalOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
  
    function modalHandler() {
      setModalOpen(!modalOpen)
    }
  
    return (
      <div className="min-h-screen bg-bgwhite">
        {/*  Mobile top bar */}
        <div className="md:hidden fixed top-0 left-0 right-0 h-14 
    bg-white/80 backdrop-blur-md
    border-b border-gray-200/60
    flex items-center justify-between px-4 z-50">
  
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="p-2 rounded-lg hover:bg-gray-100 transition"
    >
      <MenuIcon />
    </button>
  
    <div className="flex items-center gap-2">
      <MainIcon size="default"/>
      <p className="font-semibold text-lg tracking-tight">
        Synapse
      </p>
    </div>
  
    {/* Spacer to balance layout */}
    <div className="w-9" />
  </div>
  
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
  
        {/* Main content */}
        <div className="md:ml-64 lg:ml-92 pt-14 md:pt-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-8 md:p-12">
            <div className="w-full flex justify-center">
             <p className="text-xl sm:text-2xl font-bold ">All Notes</p>
            </div>
            
  
            <div className="flex justify-center gap-3 w-full sm:w-auto">
              <Button
                onclick={modalHandler}
                variant="secondary"
                size="md"
                text="Share Brain"
                startIcon={<ShareIcon />}
              />
              <Button
                onclick={modalHandler}
                variant="primary"
                size="md"
                text="Add Content"
                startIcon={<PlusIcon />}
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-8 md:px-12 pb-8">
            <Card
              title="first video"
              link="https://youtu.be/FpOcxFBzCow"
              type="Youtube"
            />
            <Card
              title="first tweet"
              link="https://x.com/thecinelost/status/2014173675457745136"
              type="Twitter"
            />
          </div>
        </div>
  
        <Modal onClose={modalHandler} open={modalOpen} />
      </div>
    )
}