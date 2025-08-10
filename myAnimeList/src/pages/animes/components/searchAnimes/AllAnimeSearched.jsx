import React, { useState, useEffect, useRef } from "react";
import Pagination from "../Pagination";
import CollectionAllAnimes from "../showAllAnimes/CollecitonAllAnimes";
import FormSearch from "./FormSearch";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllAnimeSearched = () => {

    const animesRef = useRef(null);
    const [animesSearched, setAnimesSearched] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pag, setPag] = useState(1);
    const [amountPags, setAmountPags] = useState(1);
    const base_url = "https://api.jikan.moe/v4/";
    const search_url = "anime?q=";
  
    const searchApi = async () => {
        const animeReference = animesRef.current?.value;

        
        if (!animeReference) return; 

        setLoading(true);

        try {
            const fetchApi = await fetch(`${base_url}${search_url}${animeReference}&page=${pag}`);
            const response = await fetchApi.json();

            setAnimesSearched(response.data);
            setAmountPags(response.pagination.last_visible_page );
        } catch (error) {
            console.error("Erro ao buscar animes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (animesRef.current?.value) {
            searchApi();
        }
    }, [pag]);


    return (

        <div className="d-flex justify-content-center flex-column">
            <div className="content_scroll p-3">
                <FormSearch animesRef={animesRef} searchApi={searchApi} />

                <CollectionAllAnimes animes={animesSearched.slice(0, 24)} />

                {animesSearched.length !== 0  && (
                    <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
                )}
                <div className="d-flex justify-content-center p-5 ">
                    <Link to={"/Home"}>
                        <Button className="px-5" variant="outline-info">
                            Back to main screen
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      
    );

}
    
   
export default AllAnimeSearched;