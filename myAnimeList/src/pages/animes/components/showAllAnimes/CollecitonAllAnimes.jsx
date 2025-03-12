import React from "react";
import CardAnimes from "../CardAnimes";
import {Link, useNavigate} from "react-router-dom"

const CollectionAllAnimes = ({animes}) =>{

    const navigate = useNavigate()

    const handleNavigate = (id) =>{
        navigate(`/detailsAnimes/${id}`)
    }


    return(
        <div className="">  
            <ul className="d-flex justify-content-center flex-wrap" style={{margin: "1rem 3rem"}}>
                {animes.map((item, index) => {
                    return (
                        <>
                            <CardAnimes key={index} item={item} index={index}  handleNavigate={() => handleNavigate(item.mal_id)}/> 
                        </>
                    )
                })}
            </ul>
        </div>  
    )
}

export default CollectionAllAnimes