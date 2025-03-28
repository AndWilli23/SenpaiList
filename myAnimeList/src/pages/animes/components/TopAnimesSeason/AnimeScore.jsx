import React from "react";
import {Button} from "react-bootstrap";

const AnimeScore = ({topAnime}) => {

    return(
        <div>
            {topAnime.score !== null && topAnime.score >= 7 && (
                <Button variant="outline-success" className="p-1 m-2 position-absolute top-0 end-0"> 
                        <p className="m-0">{topAnime.score.toFixed(2)}</p>
                </Button>
            )} 
            
            {topAnime.score !== null && topAnime.score >= 5 && topAnime.score <= 6.99 && (
                <Button variant="outline-warning" className="p-1 m-2 position-absolute top-0 end-0">
                        <p className="m-0">{topAnime.score.toFixed(2)}</p>
                </Button>
            )}

            {topAnime.score !== null && topAnime.score <= 5 && (
                <Button variant="outline-danger" className="p-1 m-2 position-absolute top-0 end-0">
                        <p className="m-0">{topAnime.score.toFixed(2)}</p>
                </Button>
            )}
        </div>
)

}

export default AnimeScore