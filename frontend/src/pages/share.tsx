import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Sidebar } from "../components/Sidebar"
import Card from "../components/Card"
import { MenuIcon } from "../icons/menuicon"
import { MainIcon } from "../icons/brainly"
import { HTTP_BACKEND } from "../backendUrl/config"

type Content = {
  _id: string
  type: "Youtube" | "Twitter"
  title: string
  link: string
}

export function ShareBoard() {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState<Content[]>([])
  const [owner, setOwner] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    async function fetchContent() {
      const response = await axios.get(`${HTTP_BACKEND}/share/${id}`)
      setContent(response.data.content)
      setOwner(response.data.username)
    }

    if (id) fetchContent()
  }, [id])

  return (
    <div className="min-h-screen bg-bgwhite">
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
          <MainIcon size="default" />
          <p className="font-semibold text-lg tracking-tight">
            Synapse
          </p>
        </div>

        <div className="w-9" />
      </div>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="md:ml-64 lg:ml-92 pt-14 md:pt-0">
        <div className="flex justify-center p-4 sm:p-8 md:p-12">
          <p className="text-xl sm:text-2xl font-bold">
            {owner}'s Brain
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-4 px-4 sm:px-8 md:px-12 pb-8">
          {content.map(({ _id, type, title, link }) => (
            <Card
              key={_id}
              title={title}
              link={link}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
