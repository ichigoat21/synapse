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
      
    return <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-md max-w-88">
        {/*HEADER*/}
       <div className="flex items-center justify-between w-4/5 py-4">
        <div className="flex items-center gap-2">
            <PlayIcon/>
           <p className="font-medium">{title}</p> 
        </div>
        <div className="flex items-center gap-2">
            <DeleteIcon/>
            <ShareIcon/>
        </div>
       </div>
       {/*EMBED*/}
       <div className="px-4 py-2">
        {type === "Youtube" && <iframe className="w-full h-64"  src={ytLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
       {type ==="Twitter" && <blockquote className="twitter-tweet max-h-20"><p lang="en" dir="ltr">the version of you that wins everything just woke up <a href="https://t.co/Q6cwNIkAqh">pic.twitter.com/Q6cwNIkAqh</a></p>&mdash; @tomkruise (@tom777kruise) <a href={link}>January 20, 2026</a></blockquote>}
       </div>
       {/*FOOTER*/}

       <div className="pt-6">
        <p className="font-light text-sm">{Date.now()}</p>
       </div>
    </div>
}