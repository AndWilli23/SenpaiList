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
        <>
            
            <section className="rounded ">

                <div >
                    <h2 className="text-center fw-bold fs-2 text-warning">Season highlights: </h2>
                </div>
                <div className="row p-5 rounded  "  style={{color: "#555555"}}>
                    <div className="col-6 " >
                        <ul className="list-unstyled p-1 " >
                            {topAnimes.slice(0, 5).map((topAnime, index) => (
                                <li key={index} className="shadow d-flex gap-3 rounded flex-wrap my-3 align-items-center p-2 position-relative"  style={{backgroundColor: '#F7F7F7'}}>
                                    <div className="" >
                                        <MemoizedToolTip handleNavigate={handleNavigate} topAnime={topAnime}/>
                                    </div>
                                    <div className="d-flex flex-column pt-2">
                                        <div>
                                            <p 
                                                style={{maxWidth:"40ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} 
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
                                <li key={index} className="d-flex gap-3 rounded shadow flex-wrap my-3 align-items-center p-2 position-relative "  style={{backgroundColor: '#F7F7F7'}} >
                                    <div className="" >
                                        <MemoizedToolTip handleNavigate={handleNavigate} topAnime={topAnime}/>
                                    </div>
                                    <div className="d-flex flex-column pt-2">
                                        <div>
                                            <p 
                                                style={{maxWidth:"40ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} 
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
        </>
    )
}

export default TopAnimes