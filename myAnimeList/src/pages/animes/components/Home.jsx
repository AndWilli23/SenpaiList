import React, { useEffect, useRef, useState } from "react";
import FormSearch from "./searchAnimes/FormSearch";
import Collection from "./Collection";
import Sidebar from "../../../layout/Sidebar";
import "./index.css"
import Pagination from "./Pagination";


const Home =() => {

    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [pag, setPag] = useState(1);
    const [amountPags, setAmountPags] = useState(1);
    const base_url = "https://api.jikan.moe/v4/"
    const animes_populars_url = "top/anime"

    const [isClose, setIsClose] = useState(false);

    const handleSideBar = () => {
        setIsClose(!isClose)
    }
 
    const  requestApiAnimes = async () => {
        try{
            const fetchApi = await fetch(base_url + animes_populars_url);
            
            const response = await fetchApi.json();

            if(response) {
                setAnimes(response.data);
                setAmountPags(response.pagination.last_visible_page);
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
        <>
        
   
        <div className="container d-flex" 
            style={{
                margin: isClose ? " 0 3rem" : " 0 0 0 11.5rem"   
            }}>

            <div className="container_sidebar">
                <Sidebar isOpen={isClose} handleSideBar={handleSideBar} />
            </div>
            <div className="container_principal_home" style={{
                marginTop: "3rem",
                marginLeft: "10%",
               
                }}>
                
                <div className="content_scroll " >
                <h2 className="pb-5">Animes Populares:</h2>
                    <Collection animes={animes.slice(0, 24)}/>

                    <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>

                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home

