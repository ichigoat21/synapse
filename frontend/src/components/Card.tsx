import DeleteIcon from "../icons/delete";
import PlayIcon from "../icons/play";
import { ShareIcon } from "../icons/shareicon";

export default function Card(){
    return <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-md max-w-88">
        {/*HEADER*/}
       <div className="flex items-center justify-between w-4/5 py-4">
        <div className="flex items-center gap-2">
            <PlayIcon/>
           <p className="font-medium">Project Ideas</p> 
        </div>
        <div className="flex items-center gap-2">
            <DeleteIcon/>
            <ShareIcon/>
        </div>
       </div>
       {/*EMBED*/}
       <div className="px-4 py-2">
       {/* <iframe className="w-full h-64"  src="https://www.youtube.com/embed/5auv_xrvoJk?si=W8XfLYVvB8nWRnBN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
       <blockquote className="twitter-tweet max-h-20"><p lang="en" dir="ltr">the version of you that wins everything just woke up <a href="https://t.co/Q6cwNIkAqh">pic.twitter.com/Q6cwNIkAqh</a></p>&mdash; @tomkruise (@tom777kruise) <a href="https://twitter.com/tom777kruise/status/2013539245449699595?ref_src=twsrc%5Etfw">January 20, 2026</a></blockquote>
       </div>
       {/*FOOTER*/}

       <div className="pt-6">
        <p className="font-light text-sm">Added on 10/10/2022</p>
       </div>
    </div>
}