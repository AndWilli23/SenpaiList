import React, { useEffect, useRef, useState } from "react";
import FormSearch from "./FormSearch";
import Collection from "./Collection";
import Sidebar from "../../layout/sideBar";
import "./index.css"


const HomeMangas =() => {

    const animesRef = useRef(null);
    const [mangas, setMangas] = useState([]);
    const [loading, setLoading] = useState(false)
    const base_url = "https://api.jikan.moe/v4/"
    const animes_populars_url = "top/manga"
    const search_url = "manga?q="
  

    const  requestApiAnimes = async () => {
        try{
            const fetchApi = await fetch(base_url + animes_populars_url);
            
            const response = await fetchApi.json();

            if(response) {
                setMangas(response.data);
                setLoading(true)
            }
    
            console.log(response)
    
            return response;
        } catch(error) {
            console.log("Não foi possível fazer a requisição a Api", error);
        }
    }

    useEffect(()=>{
        requestApiAnimes()
    }, [])

    const  searchApi = async () => {
        try{
            const animeReference = animesRef.current?.value

            const fetchApi = await fetch(base_url + search_url + animeReference);
            
            const response = await fetchApi.json();

            setMangas(response.data)

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
            <div className="container_principal_home">
                <FormSearch animesRef={animesRef} searchApi={searchApi} />
                
                <div className="content_scroll">
                    <Collection animes={mangas} />
                    
                </div>
            </div>
        </div>
        
    )
}

export default HomeMangas