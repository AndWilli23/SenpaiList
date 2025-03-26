import React  from "react";
import { Card } from "react-bootstrap";


const MemoizedCardAnimes = React.memo( function CardAnimes({item, handleNavigate}) { 

    return(
        
        <div className="border-0 p-2" >
            <button aria-label={`Ver detalhes de ${item.title}`} style={{all: "unset", cursor: "pointer"}} onClick={handleNavigate}>
                <Card.Img className="p-0" variant='top' src={item.images.jpg.large_image_url} style={{width: "200px", height:"300px"}}></Card.Img>
                <div className="py-2 px-0">
                    <Card.Title 
                        className="p-0" 
                        style={{
                            color: "#38592E", width: "200px", fontSize: "16px", maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" 
                        }}>
                            {item.title}
                    </Card.Title>            
                </div>
            </button>   
        </div>
       
    )
})

export default MemoizedCardAnimes;