import React, { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import "./sidebar.css"


const Sidebar = () => {

    const [selecionado, setSelecionado] = useState(false)
    const [MangasSelecionado, setMangasSelecionado] = useState(false)
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
        const navigate = useNavigate()


    const handleClickAnimes = () => {
        setSelecionado(!selecionado)
    }

    const handleClickMangas = () => {
        setMangasSelecionado(!MangasSelecionado)
    }

    const handleNavigate = (genre) =>{
        navigate(`/animesByGenres/${genre}`)
    }

    

    return( 
        <aside className="container_sidebar" style={{backgroundColor: "#252525"}}>

            <div>
                <h2>SenpaiList </h2>
                <hr/>
            </div>
            <ul>
                <h3>Animes: </h3>
                <li>
                    <button onClick={handleClickAnimes}>Animes</button>
                    {selecionado && (
                        <ul>
                            {genresOptions.map((genre, index) => (
                                <li>
                                    <button onClick={() => handleNavigate(genre[1])} >{genre[0]}</button>
                                </li>
                            ))}    
                            
                        </ul>
                    )}
                </li>

                <li>
                    <Link to={"/topAnimes"}>Animes Populares</Link>
                </li>

                <li>
                    <Link to={"/searchAnimes"}>Busca por animes</Link>
                </li>
                <h3>Mangas: </h3>
                <li>
                    <button onClick={handleClickMangas}>Mangas</button>
                    {MangasSelecionado && (
                        <ul>
                            <li>
                                <Link to={"/animeByGenres"}>Aventura</Link>
                            </li>
                            <li>
                                <Link to={"/animeByGenres"}>Ação</Link>
                            </li>
                            <li>
                                <Link to={"/animeByGenres"}>Romance</Link>
                            </li>
                            <li>
                                <Link to={"/animeByGenres"}></Link>
                            </li>

                            
                        </ul>
                    )}
                </li>
                <li>
                    <Link>Mangas Populares</Link>
                </li>
                <li>
                    <Link>Busca por mangas</Link>
                </li>
                
            </ul>
        </aside>
    )
}

export default Sidebar