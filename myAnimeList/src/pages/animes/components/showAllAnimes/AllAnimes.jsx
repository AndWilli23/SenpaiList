import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import CollectionAllAnimes from "./CollecitonAllAnimes";

const AllAnimes = () => {

    const [amountPags, setAmountPags] = useState(1);
    const [pag, setPag] = useState(1);
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
    
            console.log(response)
    
            return response;
        } catch(error) {
            console.log("Não foi possível fazer a requisição a Api", error);
        }
    }

    useEffect(()=>{
        requestApiAnimes()
    }, [])

    return (

        <div className="d-flex justify-content-center flex-column">
            <h4 className="ps-5 py-2 text-warning">Animes Populares: </h4>
            <div className="p-3">
                <CollectionAllAnimes animes={animes.slice(0, 24)} />
                <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
            </div>
        </div>
    );

}

export default AllAnimes;