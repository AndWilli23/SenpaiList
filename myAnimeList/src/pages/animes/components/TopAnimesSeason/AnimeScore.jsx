import React from "react";
import {Button} from "react-bootstrap";

const AnimeScore = ({topAnime}) => {

    return(
        <div>
            {topAnime.score !== null ? (
                <Button variant="outline-success" className="p-1 m-2 position-absolute top-0 end-0"> 
                        <p className="m-0">{topAnime.score}</p>
                </Button>
            ) : (
                <Button variant="outline-success" className="p-1 m-2 position-absolute top-0 end-0">
                        <p className="m-0">0.00</p>
                </Button>
            )}
        </div>
)

}

export default AnimeScore