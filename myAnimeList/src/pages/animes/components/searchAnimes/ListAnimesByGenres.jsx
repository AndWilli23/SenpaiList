import React, { useCallback } from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";


const ListAnimesByGenres = () => {
    const navigate = useNavigate();
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
        ["Suspense", "41"],
        ["Sobrenatural", "37"],
        ["Psicológico", "40"],
        ["Militar", "38"],
        ["Histórico", "13"]
    ];

    const handleNavigate = useCallback((genre) =>{
           return () => navigate(`/animesByGenres/${genre}`)
    }, [navigate]);


    return (
        
        <section className="d-flex justify-content-center align-items-center">
            <div>
            <div className="m-5">
                <h4  className="text-warning">Pesquisa por Gêneros: </h4>
            </div>

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">
           
                    <ul className="d-flex flex-wrap list-unstyled mb-5" style={{width: "20%"}}>
                        {genresOptions.slice(0, 4).map((genre, index) => (
                            <li key={index} className="p-2 w-100">
                                <Button
                                    variant="outline-danger"
                                    style={{ textDecoration: "none", fontSize: "16px", fontWeight: "600" }}
                                    className="my-2 w-100"
                                    onClick={handleNavigate(genre[1])}
                                >
                                    {genre[0]}
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <ul className="d-flex flex-wrap list-unstyled  mb-5" style={{width: "20%"}}>
                        {genresOptions.slice(4, 8).map((genre, index) => (
                            <li key={index} className="p-2 w-100">
                                <Button
                                    variant="outline-warning"
                                    style={{ textDecoration: "none", fontSize: "16px", fontWeight: "600" }}
                                    className="my-2 w-100"
                                    onClick={handleNavigate(genre[1])}
                                >
                                    {genre[0]}
                                </Button>
                            </li>
                        ))}
                    </ul>

                    <ul className="d-flex flex-wrap list-unstyled  mb-5" style={{width: "20%"}}>
                        {genresOptions.slice(8, 12).map((genre, index) => (
                            <li key={index} className="p-2 w-100">
                                <Button
                                    variant="outline-success"
                                    style={{ textDecoration: "none", fontSize: "16px", fontWeight: "600" }}
                                    className="my-2 w-100"
                                    onClick={handleNavigate(genre[1])}
                                >
                                    {genre[0]}
                                </Button>
                            </li>
                        ))}
                    </ul>

                        <ul className="d-flex flex-wrap list-unstyled mb-5" style={{width: "20%"}}>
                        {genresOptions.slice(12, 16).map((genre, index) => (
                            <li key={index} className="p-2 w-100">
                                <Button
                                    variant="outline-info"
                                    style={{ textDecoration: "none", fontSize: "16px", fontWeight: "600" }}
                                    className="my-2 w-100"
                                    onClick={handleNavigate(genre[1])}
                                >
                                    {genre[0]}
                                </Button>
                            </li>
                        ))}
                    </ul>

                   
                </div>
            </div>
        </section>
       
    )
}

export default ListAnimesByGenres;