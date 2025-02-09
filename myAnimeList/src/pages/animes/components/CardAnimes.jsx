import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";



const CardAnimes = ({item, index, handleNavigate}) => {


    return(
        
        <div style={{width:"40%", height:"100vh"}} >
            <Card key={index} className="shadow-lg">
                <Card.Img className="p-1" variant='top' src={item.images.jpg.large_image_url} style={{width: "100%", maxHeight:"65vh", borderRadius: "1rem"}}></Card.Img>
                <Card.Body>
                    <div className="d-flex justify-content-center" style={{padding: "20px"}}>
                        <Card.Title style={{textAlign: "center",padding: " 20px 0 0 0", maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</Card.Title>
                    </div>
                    <Card.Text>{""}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button onClick={handleNavigate}>Ver mais detalhes </Button>   
                    </div>
                </Card.Body>
            </Card>
        </div>
       
    )
}

export default CardAnimes