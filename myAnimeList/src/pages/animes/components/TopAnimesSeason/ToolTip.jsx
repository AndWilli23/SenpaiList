import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const MemoizedToolTip = React.memo(function ToolTip({handleNavigate, topAnime}){  

    return(
        <div className="m-2" >
            <OverlayTrigger
            placement="right"
            overlay={
                <Tooltip id="tooltip-top">
                    <div>
                        {topAnime.type === "TV" ? (
                            <div>
                                <p className="p-3">Temporada: {topAnime.season}</p>
                                <p>{`${topAnime.type} - ${topAnime.episodes} episódios`}</p>
                            </div>
                        ) : (
                            <p>{topAnime.type}</p>
                        )}
                    </div>
                    
                </Tooltip>
            }
            >
            
                <button onClick={handleNavigate(topAnime.mal_id)} style={{all: "unset", cursor: "pointer"}}>
                    <img 
                        className="w-100" 
                        src={topAnime.images.jpg.large_image_url} 
                        alt={`imagem dos top 10 animes populares. Anime do card: ${topAnime.title}`}
                        style={{width: "100px", height: "80px", objectFit: "cover"}}/>
                </button>
            </OverlayTrigger>
        </div>
    )

});

export default MemoizedToolTip