import DeleteIcon from "../icons/delete";
import PlayIcon from "../icons/play";
import { ShareIcon } from "../icons/shareicon";

interface CardProps {
  title: string;
  link: string;
  type: "Youtube" | "Twitter";
  onDelete: any
}

export default function Card({ title, link, type, onDelete }: CardProps) {
  function getYouTubeEmbedUrl(url: string) {
    try {
      const u = new URL(url);
      let id =
        u.hostname === "youtu.be"
          ? u.pathname.slice(1)
          : u.searchParams.get("v") || u.pathname.split("/").pop();

      return `https://www.youtube.com/embed/${id}?rel=0`;
    } catch {
      return "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
    }
  }

  const ytEmbedUrl = type === "Youtube" ? getYouTubeEmbedUrl(link) : "";

  // Normalize Twitter/X link
  const tweetUrl = link
    .replace("x.com", "twitter.com")
    .replace("http://", "https://");

  return (
    <div
      className={`
        flex flex-col 
        bg-white 
        border border-gray-200 
        rounded-xl 
        shadow-sm 
        overflow-hidden 
        transition-all duration-200 
        hover:shadow-md hover:border-gray-300
        w-full 
        h-[480px]
        max-w-md
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100 bg-gray-50/40">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 w-5 h-5 text-blue-600">
            <PlayIcon />
          </div>
          <p className="font-medium text-gray-900 text-base truncate leading-tight">
            {title}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            className="p-1.5 rounded-full hover:bg-gray-200/70 transition-colors"
            aria-label="Delete"
          >
            <div onClick={onDelete} className="w-4 h-4 text-gray-600 hover:text-red-600">
              <DeleteIcon />
            </div>
          </button>
          <button
            className="p-1.5 rounded-full hover:bg-gray-200/70 transition-colors"
            aria-label="Share"
          >
            <div className="w-4 h-4 text-gray-600 hover:text-blue-600">
              <ShareIcon />
            </div>
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 relative bg-black/5 overflow-hidden">
        {type === "Youtube" && (
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full"
              src={ytEmbedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {type === "Twitter" && (
          <div className="absolute inset-0 p-4 overflow-y-auto bg-white">
            <blockquote className="twitter-tweet" data-lang="en">
              <a href={tweetUrl}>{tweetUrl}</a>
            </blockquote>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
        <span>{new Date().toLocaleDateString()}</span>
        <span className="text-gray-400 uppercase tracking-wide text-[10px] font-medium">
          {type}
        </span>
      </div>
    </div>
  );
}