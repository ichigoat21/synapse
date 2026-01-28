import DeleteIcon from "../icons/delete";
import PlayIcon from "../icons/play";
import { ShareIcon } from "../icons/shareicon";


interface cardProps {
    title : string,
    link : string,
    type : "Youtube" | "Twitter" 
}
export default function Card({title, link, type} : cardProps){
    function getYouTubeEmbedUrl(url : string) {
        const u = new URL(url);
      
        let id =
          u.hostname === "youtu.be"
            ? u.pathname.slice(1)
            : u.searchParams.get("v") ||
              u.pathname.split("/").pop();
      
        return `https://www.youtube.com/embed/${id}`;
      }

    const ytLink = getYouTubeEmbedUrl(link)
      
    // 📱 RESPONSIVE CARD
    // max-w-full on mobile, max-w-88 on larger screens
    return <div className="flex flex-col bg-white border border-gray-200 rounded-md w-full max-w-full sm:max-w-88 overflow-hidden">
        {/*HEADER*/}
       <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
            <div className="scale-75 sm:scale-100 flex-shrink-0">
                <PlayIcon/>
            </div>
           <p className="font-medium text-sm sm:text-base truncate">{title}</p> 
        </div>
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="scale-75 sm:scale-100">
                <DeleteIcon/>
            </div>
            <div className="scale-75 sm:scale-100">
                <ShareIcon/>
            </div>
        </div>
       </div>
       {/*EMBED*/}
       {/* 📱 YouTube: 16:9 aspect ratio, Twitter: controlled height with scroll */}
       <div className="w-full">
        {type === "Youtube" && (
            <div className="relative w-full bg-black" style={{paddingBottom: '56.25%'}}>
                <iframe 
                    className="absolute top-0 left-0 w-full h-full"  
                    src={ytLink} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>
        )}
       {type ==="Twitter" && (
           <div className="w-full h-80 sm:h-96 overflow-y-auto overflow-x-hidden">
               <blockquote className="twitter-tweet">
                   <a href={link.replace("x.com","twitter.com")}></a> 
               </blockquote>
           </div>
       )}
       </div>
       {/*FOOTER*/}

       <div className="px-3 sm:px-6 py-3 sm:py-4 border-t border-gray-100">
        <p className="font-light text-xs sm:text-sm text-gray-500">{Date.now()}</p>
       </div>
    </div>
}