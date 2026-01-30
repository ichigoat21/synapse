import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import Card from "../components/Card";
import axios from "axios";
import { HTTP_BACKEND } from "../backendUrl/config";
import { useParams } from "react-router-dom";

export function ShareBoard(){
    const [content, setContent] = useState([]);
    const id = useParams<{id : string}>()

    async function fetchContent(){
        const response = await axios.get(`${HTTP_BACKEND}/contents/${id}`)
        setContent(response.data.content)
    }
    useEffect(() => {
        if (id) fetchContent();
      }, [id]);
    return (
        <div>
          <Sidebar isOpen={true}/>
          <div className="p-4 ml-72 bg-[#f8fafc] min-h-screen">
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {content.map(({ _id, type, title, link }) => (
                <Card
                  key={_id}
                  title={title}
                  link={link}
                  type={type as "Youtube" | "Twitter"}
                />
              ))}
            </div>
          </div> 
        </div>
      );
}