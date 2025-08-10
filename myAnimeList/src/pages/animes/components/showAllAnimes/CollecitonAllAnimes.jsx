import React, { useCallback } from "react";
import MemoizedCardAnimes from "../CardAnimes";
import {useNavigate} from "react-router-dom"

const CollectionAllAnimes = ({animes}) =>{

    const navigate = useNavigate()

    const handleNavigate = useCallback((id) =>{
        return () => navigate(`/detailsAnimes/${id}`)
    }, [navigate])


    return(
        <div className="">  
            <ul className="d-flex justify-content-center flex-wrap p-0" >
                {animes.map((item, index) => {
                    return (
                        <>
                            <MemoizedCardAnimes key={index} item={item} index={index}  handleNavigate={handleNavigate(item.mal_id)}/> 
                        </>
                    )
                })}
            </ul>
        </div>  
    )
}

export default CollectionAllAnimes