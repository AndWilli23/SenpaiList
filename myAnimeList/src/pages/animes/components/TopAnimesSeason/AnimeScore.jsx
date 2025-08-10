import React from "react";
import {Button} from "react-bootstrap";

const AnimeScore = ({topAnime}) => {

    return(
        <div>
          
            <Button variant="outline-light" className="p-1 m-2 position-absolute top-0 end-0"> 
                    <p className="m-0">{topAnime.score.toFixed(2)}</p>
            </Button>
          
        </div>
)

}

export default AnimeScore