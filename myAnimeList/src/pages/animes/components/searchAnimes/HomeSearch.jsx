import React, { useEffect, useRef, useState } from "react";
import Collection from "../Collection";
import Sidebar from "../../../../layout/Sidebar.jsx";
import FormSearch from "./FormSearch";
import Pagination from "../Pagination";
import Loading from "../Loading";
import "../index.css"
import ListAnimesByGenres from "./ListAnimesByGenres.jsx";

const HomeSearch = () => {
    const animesRef = useRef(null);
    const [animesSearched, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pag, setPag] = useState(1);
    const [amountPags, setAmountPags] = useState(1);

    const base_url = "https://api.jikan.moe/v4/";
    const search_url = "anime?q=";
    const [isClose, setIsClose] = useState(false);
  
    const handleSideBar = () => {
        setIsClose(!isClose)
    }

    const searchApi = async () => {
        const animeReference = animesRef.current?.value;

        
        if (!animeReference) return; 

        setLoading(true);

        try {
            const fetchApi = await fetch(`${base_url}${search_url}${animeReference}&page=${pag}`);
            const response = await fetchApi.json();

            setAnimes(response.data);
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
        <div className="container " 
            style={{
                margin: isClose ? " 0 5.5rem" : " 0 0 0 11.5rem",
                padding: !isClose && " 0 5rem",  
            }}>
            <div className="container_sidebar">
                {!loading && (
                    <Sidebar isOpen={isClose} handleSideBar={handleSideBar} />
                )}
            </div>
            <div className="container_principal_homesSearch flex-column ">
                <FormSearch animesRef={animesRef} searchApi={searchApi} />

                {animesSearched.length === 0 && !loading && (
                    <ListAnimesByGenres/>
                )}

                {loading ? (
                    <Loading />
                ) : (
                    <div className="content_scroll" style={{marginTop: "3rem"}}>
                        {animesSearched.length !== 0 && (
                            <>
                                <Collection animes={animesSearched.slice(0, 24)} />
                                <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>   
                            </>
                        )}
                    </div>
                )}
            
               
              
            </div>
        </div>
    );
};

export default HomeSearch;
