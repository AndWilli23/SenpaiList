import React from "react";
import {useNavigate} from "react-router-dom";


const ListAnimesByGenres = () => {
    const navigate = useNavigate();
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
    ["Suspense", "41"]];

    const handleNavigate = (genre) =>{
        navigate(`/animesByGenres/${genre}`)
    }


    return (
        
        <section className="d-flex justify-content-center" style={{height: "400px", position: "relative", bottom: "-60px"}}>
            
            <div style={{border:' 2px groove grey', padding: '6px 10rem', borderRadius:' 4px', textAlign: ""}}>

                <span style={{
                  fontweight: 'bold',
                  padding: '0 10px',
                  marginleft: '-5px',
                  position: 'relative',
                  top: '-20px',
                  left: "-8rem",
                  backgroundColor: "#181818"
                }}>Pesquisa por gêneros</span>

                <ul className="d-flex flex-wrap justify-content-center px-2 py-3" style={{flexDirection: "column", width:"100%", height: "80%", gap: "4rem" }}>
                    {genresOptions.map((genre, index) => (
                        <li key={index} className="d-flex align-items-center">
                            <button
                            style={{}}
                            className="my-2"
                            onClick={() => handleNavigate(genre[1])}
                            >
                            {genre[0]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
       
    )
}

export default ListAnimesByGenres;