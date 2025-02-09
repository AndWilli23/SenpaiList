import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"


const Sidebar = () => {

    const [selecionado, setSelecionado] = useState(false)
    const [MangasSelecionado, setMangasSelecionado] = useState(false)


    const handleClickAnimes = () => {
        setSelecionado(!selecionado)
    }

    const handleClickMangas = () => {
        setMangasSelecionado(!MangasSelecionado)
    }

    return( 
        <aside className="container_sidebar">

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
                            <li>
                                <Link>Aventura</Link>
                            </li>
                            <li>
                                <Link>Ação</Link>
                            </li>
                            <li>
                                <Link>Romance</Link>
                            </li>
                            <li>
                                <Link></Link>
                            </li>
                            
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
                                <Link>Aventura</Link>
                            </li>
                            <li>
                                <Link>Ação</Link>
                            </li>
                            <li>
                                <Link>Romance</Link>
                            </li>
                            <li>
                                <Link></Link>
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