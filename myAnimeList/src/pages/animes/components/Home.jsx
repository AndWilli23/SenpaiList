import React, { useEffect, useRef, useState } from "react";
import FormSearch from "./searchAnimes/FormSearch";
import Collection from "./Collection";
import Sidebar from "../../layout/sideBar";
import "./index.css"


const Home =() => {

    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const base_url = "https://api.jikan.moe/v4/"
    const animes_populars_url = "top/anime"
  

    const  requestApiAnimes = async () => {
        try{
            const fetchApi = await fetch(base_url + animes_populars_url);
            
            const response = await fetchApi.json();

            if(response) {
                setAnimes(response.data);
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

 
    return(
   
        <div className="container">
            <div className="container_sidebar">
                <Sidebar />
            </div>
            <div className="container_principal_home" style={{marginTop: "3rem"}}>
                
                <div className="content_scroll">
                    <Collection animes={animes.slice(0, 24)} />
                    
                </div>
            </div>
        </div>
        
    )
}

export default Home