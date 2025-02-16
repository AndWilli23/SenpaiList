import React from "react";
import CardAnimes from "./CardAnimes";
import {useNavigate} from "react-router-dom"

const Collection = ({animes}) =>{

    const navigate = useNavigate()

    const handleNavigate = (id) =>{
        navigate(`/detailsAnimes/${id}`)
    }


    return(
        <ul className="d-flex flex-wrap justify-content-around gap-5" >
            {animes.map((item, index) => {
                return (
                    <>
                        <CardAnimes key={index} item={item} index={index}  handleNavigate={() => handleNavigate(item.mal_id)}/>
                        
                    </>
                )

            })}
        </ul>
    )
}

export default Collection