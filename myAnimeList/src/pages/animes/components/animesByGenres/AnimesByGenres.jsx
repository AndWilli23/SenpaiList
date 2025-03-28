import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../Pagination";
import Loading from "../Loading";
import CollectionAllAnimes from "../showAllAnimes/CollecitonAllAnimes.jsx";

const AnimesByGenres = () => {
    const { genre } = useParams();
    const [pag, setPag] = useState(1);
    const [searchAnimesByGenres, setSearchAnimesByGenres] = useState([]);
    const [amountPags, setAmountPags] = useState(1);
    const [loading, setLoading] = useState(false)
    const [nameGenre, setNameGenre] = useState()

    const genresOptions = [
        ["Ação", "1"],
        ["Aventura", "2"],
        ["Romance", "22"],
        ["Comédia", "4"],
        ["Drama", "8"],
        ["Fantasia", "10"],
        ["Ficção Científica", "24"],
        ["Horror", "14"],
        ["Mistério", "7"],
        ["Esportes", "30"],
        ["Slice of Life", "36"],
        ["Thriller", "41"],
        ["Sobrenatural", "37"],
        ["Psicológico", "40"],
        ["Militar", "38"],
        ["Histórico", "13"]
    ];
   

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
        <div className=" d-flex justify-content-center flex-column">
            <h3 className="ps-5 pt-5 pb-3 text-warning" style={{paddingTop: "4rem"}}>{nameGenre}: </h3>
            <div className="p-3">
                <CollectionAllAnimes animes={searchAnimesByGenres.slice(0, 24)} />
                <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
            </div>
        </div>
    );
};

export default AnimesByGenres;
