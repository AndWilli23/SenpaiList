import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collection from "../Collection";
import Sidebar from "../layout/sideBar";
import Pagination from "../Pagination";
import Loading from "../Loading";

const AnimesByGenres = () => {
    const { genre } = useParams();
    const [pag, setPag] = useState(1);
    const [searchAnimesByGenres, setSearchAnimesByGenres] = useState([]);
    const [amountPags, setAmountPags] = useState(1);
    const [loading, setLoading] = useState(false)
    const [nameGenre, setNameGenre] = useState()
    const genresOptions = [["Ação", "1"],
        ["Aventura", "2"],
        ["Românce", "22"], 
        ["Comédia", "4"] ,
        ["Drama", "8"],
        ["Fantasia", "10"],
        ["Sci-Fi", "24"],
        ["Horror", "14"],
        ["Mistério", "7"],
        ["Esportes", "30"],
        ["Slice of Life", "36"],
        ["Suspense", "41"]]

    useEffect(() => {
        const requestApi = async () => {
            setLoading(true); 

            try {
                const getAnimeByGenre = await fetch(
                    `https://api.jikan.moe/v4/anime?genres=${genre}&page=${pag}`
                );
                const response = await getAnimeByGenre.json();

                setSearchAnimesByGenres(response.data);
                setAmountPags(response.pagination.last_visible_page);
            } finally {
                setLoading(false); 
            }
        };

        requestApi();
    }, [pag, genre]);

    useEffect(() => {
        if(genre) {

            const foundGenre = genresOptions.find(item => item[1] === genre);
            setNameGenre(foundGenre ? foundGenre[0] : "Desconhecido");
            
        }
        
    }, [genre]);

    if (loading) {
        return <Loading />;
    }


    console.log(nameGenre);
    console.log(searchAnimesByGenres);

    return (
        <div className="container">
            <div className="container_sidebar">
                <Sidebar />
            </div>
            <div className="container_principal_home">
            <h2 className="pb-3" >{nameGenre}: </h2>
                <div className="content_scroll">
                    {loading && (
                        <p>Carregando</p>
                    )}
                    <Collection animes={searchAnimesByGenres.slice(0, 24)} />
                </div>
                    <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
               
            </div>
        </div>
    );
};

export default AnimesByGenres;
