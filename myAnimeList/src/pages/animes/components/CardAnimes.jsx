import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";



const CardAnimes = ({item, index, handleNavigate}) => {


    return(
        
        <div style={{width:"24%", height:"80vh", marginRight: "3rem"}} >
            <Card key={index} className="" style={{ backgroundColor: "#222831"}}>
                <Card.Img className="p-2 shadow-sm" variant='top' src={item.images.jpg.large_image_url} style={{width: "100%", maxHeight:"39vh", borderRadius: "1rem"}}></Card.Img>
                <Card.Body>
                    <div className="d-flex justify-content-center" style={{padding: "20px"}}>
                        <Card.Title style={{color: "#00FFF6",  textAlign: "center", maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button style={{backgroundColor: "#FF007A", border: "none"}} onClick={handleNavigate}>Ver mais detalhes </Button>   
                    </div>
                </Card.Body>
            </Card>
        </div>
       
    )
}

export default CardAnimes