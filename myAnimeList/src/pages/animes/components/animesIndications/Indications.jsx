import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Indication = ({animes}) => {

  const navigate = useNavigate()

    const handleNavigate = (id) =>{
        navigate(`/detailsAnimes/${id}`)
    }

  return (
    <div className="bg-info p-4">
        {animes.slice(0,1).map ((anime) => (

            <>
                <div className="d-flex pb-4 m-5">
                    <img className="w-25" src={anime.images.webp.large_image_url} alt={`recomendação do anime: ${anime.title}`}/>
                    <div>
                        <p className="fs-2 text-center text-light">{anime.title}</p>
                        <p className="my-4 mx-5 text-center text-light">{anime.synopsis}</p>
                        <div className="d-flex justify-content-center">
                            <Button style={{padding: "5px 9rem"}}>Ver mais detelhes</Button>
                        </div>
                    </div>
                </div>
            </>
        ))}

        {animes.slice(1, 2).map ((anime) => (

            <>
                <div className="d-flex justify-content-end pt-4 m-5 flex-row-reverse">
                    <img className="w-25" src={anime.images.webp.large_image_url} alt={`recomendação do anime: ${anime.title}`}/>
                    <div>
                        <p className="fs-2 text-center text-light">{anime.title}</p>
                        <p className="my-4 mx-5 text-center text-light">{anime.synopsis}</p>
                        <div className="d-flex justify-content-center">
                            <Button style={{padding: "5px 9rem"}}>Ver mais detelhes</Button>
                        </div>
                    </div>
                </div>
            </>
        ))}


    </div>   
    
  );
}

export default Indication