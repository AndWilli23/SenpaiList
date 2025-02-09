import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";



const CardAnimes = ({item, index, handleNavigate}) => {


    return(
        
        <div style={{width:"20%", height:"100vh"}}>
            <Card key={index} className="">
                <Card.Img variant='top' src={item.images.jpg.image_url} style={{width: "100%", maxHeight:"70vh"}}></Card.Img>
                <Card.Body>
                    <div className="d-flex justify-content-center" style={{padding: "20px"}}>
                        <Card.Title style={{textAlign: "center",padding: " 20px 0 0 0" }}>{item.title}</Card.Title>
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