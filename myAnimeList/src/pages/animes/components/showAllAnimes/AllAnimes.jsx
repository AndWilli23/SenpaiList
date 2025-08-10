import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import CollectionAllAnimes from "./CollecitonAllAnimes";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";


const AllAnimes = () => {

    const [amountPags, setAmountPags] = useState(1);
    const [pag, setPag] = useState(1);
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false)
    const base_url = "https://api.jikan.moe/v4/"
    const animes_populars_url = "top/anime"

    const  requestApiAnimes = async () => {
        setLoading(true); 
        try{
            const fetchApi = await fetch(base_url + animes_populars_url + `?page=${pag}`);
            
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
        } finally {
            setLoading(false); 
        }
    }

    useEffect(()=>{
        requestApiAnimes()
    }, [pag])

    if (loading) {
        return <Loading />;
    }

    return (

        <div className="d-flex justify-content-center flex-column">
            <h2 className=" py-5 text-center fw-bold fs-2 text-dark">All top Animes: </h2>
            <div className="p-3">
                <CollectionAllAnimes animes={animes.slice(0, 24)} />
                <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
                <div className="d-flex justify-content-center p-5 ">
                    <Link to={"/"}>
                        <Button className="px-5"  variant="outline-info">
                            Back to main screen
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default AllAnimes;