import { useEffect, useState } from "react"
import { ShareIcon } from "../icons/shareicon"
import PlusIcon from "../icons/plusicon"
import Card from "../components/Card"
import { Modal } from "../components/modal"
import axios from "axios"
import { HTTP_BACKEND } from "../backendUrl/config"
import { ShareModal } from "../components/shareModal"

type Content = {
    _id: string;
    type: "Youtube" | "Twitter";
    title: string;
    link: string;
};

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false)
    const [content, setContent] = useState<Content[]>([])
    const [filteredContent, setFilteredContent] = useState<Content[]>([])
    const [shareModalOpen, setShareModalOpen] = useState(false)
    const [shareLink, setShareLink] = useState("")
    const [refreshTrigger, setRefreshTrigger] = useState(0)
    const [activeFilter, setActiveFilter] = useState<"all" | "Youtube" | "Twitter">("all")

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${HTTP_BACKEND}/contents/home`, {
                headers: { Authorization: localStorage.getItem("token") ?? "" }
            })
            setContent(response.data.content)
            setFilteredContent(response.data.content)
        }
        fetchData()
    }, [refreshTrigger])

    function applyFilter(filter: "all" | "Youtube" | "Twitter") {
        setActiveFilter(filter)
        setFilteredContent(filter === "all" ? content : content.filter(c => c.type === filter))
    }

    async function deleteHandler(id: string) {
        await axios.delete(`${HTTP_BACKEND}/contents/content/${id}`, {
            headers: { Authorization: localStorage.getItem("token") ?? "" }
        })
        setContent(prev => prev.filter(c => c._id !== id))
        setFilteredContent(prev => prev.filter(c => c._id !== id))
    }

    function modalHandler() {
        if (modalOpen) setRefreshTrigger(prev => prev + 1)
        setModalOpen(prev => !prev)
    }

    async function shareHandler() {
        const response = await axios.post(`${HTTP_BACKEND}/contents/share`,
            { share: true },
            { headers: { Authorization: localStorage.getItem("token") } }
        )
        setShareLink(`https://synapse-5z35.vercel.app/${response.data.hash}`)
        setShareModalOpen(true)
    }

    const filters: { label: string; value: "all" | "Youtube" | "Twitter" }[] = [
        { label: "All", value: "all" },
        { label: "YouTube", value: "Youtube" },
        { label: "Twitter", value: "Twitter" },
    ]

    return (
        <div className="min-h-screen bg-[#f8f8f6]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:ital,wght@0,300;1,300&display=swap');`}</style>

            {/* Topbar */}
            <header className="sticky top-0 z-40 bg-[#f8f8f6]/90 backdrop-blur-md border-b border-[#e8e8e4]">
                <div className="flex items-center justify-between px-5 sm:px-8 py-4">
                    <span style={{ fontFamily: "'Fraunces', serif" }} className="text-xl font-light tracking-tight text-[#1a1a1a]">
                        Synapse
                    </span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={shareHandler}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                                border border-[#1a1a1a]/15 text-[#1a1a1a]
                                hover:border-[#1a1a1a]/40 hover:-translate-y-px transition-all"
                        >
                            <ShareIcon />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                        <button
                            onClick={modalHandler}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                                bg-[#1a1a1a] text-[#f8f8f6]
                                hover:opacity-80 hover:-translate-y-px transition-all"
                        >
                            <PlusIcon />
                            <span className="hidden sm:inline">Add</span>
                        </button>
                    </div>
                </div>

                {/* Filter pills */}
                <div className="flex items-center gap-2 px-5 sm:px-8 pb-3 overflow-x-auto scrollbar-hide">
                    {filters.map(f => (
                        <button
                            key={f.value}
                            onClick={() => applyFilter(f.value)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap
                                ${activeFilter === f.value
                                    ? "bg-[#1a1a1a] text-[#f8f8f6]"
                                    : "bg-[#efefed] text-[#888] hover:text-[#1a1a1a] hover:bg-[#e4e4e0]"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                    <span className="ml-auto text-[11px] text-[#ccc] whitespace-nowrap shrink-0">
                        {filteredContent.length} {filteredContent.length === 1 ? "item" : "items"}
                    </span>
                </div>
            </header>

            {/* Content */}
            <main className="px-4 sm:px-8 py-6">
                {filteredContent.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <div className="w-12 h-12 rounded-2xl bg-[#efefed] flex items-center justify-center mb-4 text-[#bbb]">
                            <PlusIcon />
                        </div>
                        <p style={{ fontFamily: "'Fraunces', serif" }} className="text-lg font-light text-[#1a1a1a] mb-1">
                            Nothing here yet
                        </p>
                        <p className="text-sm text-[#aaa] font-light">
                            Tap Add to save your first highlight
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredContent.map(({ _id, type, title, link }) => (
                            <Card
                                key={_id}
                                title={title}
                                link={link}
                                type={type}
                                onDelete={() => deleteHandler(_id)}
                            />
                        ))}
                    </div>
                )}
            </main>

            <Modal onClose={modalHandler} open={modalOpen} />
            <ShareModal
                isOpen={shareModalOpen}
                onClose={() => setShareModalOpen(false)}
                shareLink={shareLink}
            />
        </div>
    )
}