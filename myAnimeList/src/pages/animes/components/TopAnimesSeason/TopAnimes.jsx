import React, { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MemoizedToolTip from "./ToolTip";
import AnimeScore from "./AnimeScore";



const TopAnimes = () => {

    const [color, setColor] = useState([
        "#0d6efd",
        "#198754",
        "#dc3545",
        "#ffc107", 
        "#0dcaf0",
        "#28a745", 
        "#17a2b8",
        "#fd7e14", 
        "#6610f2",
        "#20c997",
    ]);
    const navigate = useNavigate();
    const [topAnimes, setTopAnimes] = useState([]);

    const handleNavigate = useCallback((id) =>{
       return () => navigate(`/detailsAnimes/${id}`);
    }, [navigate]);

    useEffect(() => {
        const requestApi = async () => {
            const getTopAnimes = await fetch("https://api.jikan.moe/v4/seasons/now");
            const response = await getTopAnimes.json();
            
            setTopAnimes(response.data);
            console.log(topAnimes);
            
        }

        requestApi()
    }, []);


    return(
        <section className="m-5 bg-ligth p-4 rounded ">
            <h4 className="text-warning">Animes relevantes da temporada: </h4>
            <div className="row">
                <div className="col-6 ">
                    <ul className="list-unstyled p-1" >
                        {topAnimes.slice(0, 5).map((topAnime, index) => (
                            <li key={index} className=" d-flex gap-3 bg-light shadow-lg flex-wrap my-3 align-items-center p-2 position-relative">
                                <div className="" >
                                    <MemoizedToolTip handleNavigate={handleNavigate} topAnime={topAnime}/>
                                </div>
                                <div className="d-flex flex-column pt-2">
                                    <div>
                                        <p 
                                            style={{color: "#38592E", maxWidth:"40ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} 
                                            className="">
                                                {topAnime.title}
                                            </p>    
                                    </div>
                                    <div className="d-flex gap-3">
                                        {topAnime.genres.map((genre, n) => (
                                            
                                            <p 
                                                key={n} 
                                                className={`text-light p-1 px-3 rounded`} 
                                                style={{backgroundColor: `${color[index ]}`}}
                                                index={index}>{genre.name}</p>
                                        ))}
                                    </div>  
                                </div>
                                <div>
                                    <AnimeScore topAnime={topAnime}/>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-6">
                    <ul className="list-unstyled p-1">
                        {topAnimes.slice(5, 10).map((topAnime, index) => (
                            <li key={index} className="d-flex gap-3 bg-light shadow-lg flex-wrap my-3 align-items-center p-2 position-relative">
                                <div className="" >
                                    <MemoizedToolTip handleNavigate={handleNavigate} topAnime={topAnime}/>
                                </div>
                                <div className="d-flex flex-column pt-2">
                                    <div>
                                        <p 
                                            style={{ color: "#38592E", maxWidth:"40ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} 
                                            className="">
                                                {topAnime.title}
                                        </p>    
                                    </div>
                                    <div className="d-flex gap-3">
                                        {topAnime.genres.map((genre, n) => ( 
                                            <p 
                                                key={n} 
                                                className={`text-light p-1 px-3 rounded`} 
                                                style={{backgroundColor: `${color.slice(5, 10)[index]}`}}
                                                index={index}>{genre.name}</p>
                                        ))}
                                    </div>  
                                </div>
                                <div>
                                    <AnimeScore topAnime={topAnime}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TopAnimes