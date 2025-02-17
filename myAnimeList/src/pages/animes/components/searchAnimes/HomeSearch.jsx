import React, { useEffect, useRef, useState } from "react";
import Collection from "../Collection";
import Sidebar from "../layout/Sidebar.jsx";
import FormSearch from "./FormSearch";
import Pagination from "../Pagination";
import Loading from "../Loading";

const HomeSearch = () => {
    const animesRef = useRef(null);
    const [animesSearched, setAnimes] = useState([]);
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
        <div className="container">
            <div className="container_sidebar">
                <Sidebar />
            </div>
            <div className="container_principal_home">
                <FormSearch animesRef={animesRef} searchApi={searchApi} />

                {loading ? (
                    <Loading />
                ) : (
                    <div className="content_scroll">
                        <Collection animes={animesSearched.slice(0, 24)} />
                    </div>
                )}
               {
                    animesRef.current?.value && (
                        <Pagination amountPags={amountPags} setPags={setPag} pags={pag} />
                    )
               }
              
            </div>
        </div>
    );
};

export default HomeSearch;
