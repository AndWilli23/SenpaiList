import React, { useEffect, useState } from "react";
import Collection from "./Collection";
import "./index.css"
import TopAnimes from "./TopAnimesSeason/TopAnimes";
import Indication from "./animesIndications/Indications";
import ListAnimesByGenres from "./searchAnimes/ListAnimesByGenres";
import HeroSection from "../../../layout/HeroSection";



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
            <HeroSection/>
            <Collection animes={animes}/>
            <TopAnimes listTopAnimes={animes.slice(0, 10)}/>
            <Indication animes={animes}/>
            <ListAnimesByGenres/>
        </>
        
    )
}

export default Home

