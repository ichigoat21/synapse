import DeleteIcon from "../icons/delete"

interface CardProps {
    title: string
    link: string
    type: "Youtube" | "Twitter"
    onDelete?: () => void
}

export default function Card({ title, link, type, onDelete }: CardProps) {
    function getYouTubeEmbedUrl(url: string) {
        try {
            const u = new URL(url)
            const id =
                u.hostname === "youtu.be"
                    ? u.pathname.slice(1)
                    : u.searchParams.get("v") || u.pathname.split("/").pop()
            return `https://www.youtube.com/embed/${id}?rel=0`
        } catch {
            return "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
    }

    const ytEmbedUrl = type === "Youtube" ? getYouTubeEmbedUrl(link) : ""
    const tweetUrl = link.replace("x.com", "twitter.com").replace("http://", "https://")

    return (
        <div className="flex flex-col bg-white border border-[#e8e8e4] rounded-2xl overflow-hidden
            transition-all duration-200 hover:shadow-md hover:border-[#d0d0cc] hover:-translate-y-0.5 w-full h-[420px]">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0f0ec]">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${type === "Youtube" ? "bg-red-400" : "bg-sky-400"}`} />
                    <p className="text-sm font-medium text-[#1a1a1a] truncate">{title}</p>
                </div>
                <button
                    onClick={onDelete}
                    className="p-1.5 rounded-full hover:bg-[#f5f5f0] transition-colors shrink-0 ml-2"
                    aria-label="Delete"
                >
                    <span className="w-3.5 h-3.5 text-[#bbb] hover:text-red-400 transition-colors block">
                        <DeleteIcon />
                    </span>
                </button>
            </div>

            {/* Embed */}
            <div className="flex-1 relative overflow-hidden bg-[#fafaf8]">
                {type === "Youtube" && (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={ytEmbedUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                {type === "Twitter" && (
                    <div className="absolute inset-0 p-3 overflow-y-auto bg-white">
                        <blockquote className="twitter-tweet" data-lang="en">
                            <a href={tweetUrl}>{tweetUrl}</a>
                        </blockquote>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-[#f0f0ec] flex items-center justify-between">
                <span className="text-[10px] text-[#ccc] uppercase tracking-widest font-medium">{type}</span>
                <span className="text-[10px] text-[#ccc]">{new Date().toLocaleDateString()}</span>
            </div>
        </div>
    )
}