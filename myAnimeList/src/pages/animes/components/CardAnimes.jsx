import React  from "react";
import { Card } from "react-bootstrap";


const MemoizedCardAnimes = React.memo( function CardAnimes({item, handleNavigate}) { 

    return(
        
        <div className="px-3 m-4" >
            <button aria-label={`Ver detalhes de ${item.title}`} style={{all: "unset", cursor: "pointer"}} onClick={handleNavigate}>
                <Card.Img className="" variant='top' src={item.images.jpg.large_image_url} style={{height:"300px"}}></Card.Img>
                <div className="py-2 px-0">
                    <Card.Title 
                        className="p-0 text-dark" 
                        style={{
                            width: "200px", fontSize: "16px", maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis", textAlign: "center"
                        }}>
                            {item.title}
                    </Card.Title>            
                </div>
            </button>   
        </div>
       
    )
})

export default MemoizedCardAnimes;