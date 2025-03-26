import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Collection from "./Collection";
import "./index.css"
import TopAnimes from "./TopAnimesSeason/TopAnimes";
import AnimeNews from "./releases/NewAnimeReleases";
import Indication from "./animesIndications/Indications";
import HomeSearch from "./searchAnimes/HomeSearch";
import ListAnimesByGenres from "./searchAnimes/ListAnimesByGenres";



const Home =() => {

    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [pag, setPag] = useState(1);
    const [amountPags, setAmountPags] = useState(1);
    const base_url = "https://api.jikan.moe/v4/"
    const animes_populars_url = "top/anime"

    const  requestApiAnimes = async () => {
        try{
            const fetchApi = await fetch(base_url + animes_populars_url);
            
            const response = await fetchApi.json();

            if(response) {
                setAnimes(response.data);
                setAmountPags(response.pagination.last_visible_page);
                setLoading(true)
            }
    
            console.log(response.data)
    
            return response;
        } catch(error) {
            console.log("Não foi possível fazer a requisição a Api", error);
        }
    }

    useEffect(()=>{
        requestApiAnimes()
    }, [])

 
    return(
        <>
            <HomeSearch/>
            <div className="d-flex justify-content-end mx-5 mt-5 mb-2">
                <Link className="fs-5  p-2" to={"/allAnimes"}  >Ver todos</Link>
            </div>
            <Collection animes={animes}/>
            <TopAnimes listTopAnimes={animes.slice(0, 10)}/>
            <AnimeNews/>
            <Indication animes={animes}/>
            <ListAnimesByGenres/>
        </>
        
    )
}

export default Home

