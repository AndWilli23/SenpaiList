import React, { useEffect, useRef, useState } from "react";
import Collection from "../Collection";
import Sidebar from "../../../layout/sideBar";
import FormSearch from "./FormSearch";


const HomeSearch =() => {

    const animesRef = useRef(null);
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const base_url = "https://api.jikan.moe/v4/"

    const search_url = "anime?q="
  

    const  searchApi = async () => {
        try{
            const animeReference = animesRef.current?.value

            const fetchApi = await fetch(base_url + search_url + animeReference);
            
            const response = await fetchApi.json();

            setAnimes(response.data)

            setLoading(true)
    
            console.log(response)
    
            return response;
        } catch(error) {
            console.log("Não foi possível fazer a requisição a Api", error);
        }
    }

    
    return(
   
        <div className="container">
            <div className="container_sidebar">
                <Sidebar />
            </div>
            <div className="container_principal_home" >
                <FormSearch animesRef={animesRef} searchApi={searchApi}/>
                  
                <div className="content_scroll">
                    <Collection animes={animes.slice(0, 24)} />
                </div>
            </div>
        </div>
        
    )
}

export default HomeSearch