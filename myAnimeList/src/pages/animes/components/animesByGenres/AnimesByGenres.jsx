import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collection from "../Collection";
import Sidebar from "../../../../layout/Sidebar.jsx";
import Pagination from "../Pagination";
import Loading from "../Loading";

const AnimesByGenres = () => {
    const { genre } = useParams();
    const [pag, setPag] = useState(1);
    const [searchAnimesByGenres, setSearchAnimesByGenres] = useState([]);
    const [amountPags, setAmountPags] = useState(1);
    const [loading, setLoading] = useState(false)
    const [nameGenre, setNameGenre] = useState()
    const [isClose, setIsClose] = useState(false);

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

    const handleSideBar = () => {
        setIsClose(!isClose)
    }

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
        <div className="container " 
        style={{
            margin: isClose ? " 0 5.5rem" : " 0 0 0 11.5rem",
            padding: !isClose && " 0 5rem",  
        }}>
            <div className="container_sidebar">
                <Sidebar isOpen={isClose} handleSideBar={handleSideBar} />
            </div>
            <div className="container_principal_home flex-column" style={{
                marginTop: "3rem",
                marginLeft: "7%",
               
                }}>
            <h2 className="pb-3" >{nameGenre}: </h2>
                <div className="content_scroll">
                    {loading && (
                        <p>Carregando</p>
                    )}
                    <Collection animes={searchAnimesByGenres.slice(0, 24)} />
                    <Pagination amountPags={amountPags} setPags={setPag} pags={pag}/>
                </div>
               
            </div>
        </div>
    );
};

export default AnimesByGenres;
