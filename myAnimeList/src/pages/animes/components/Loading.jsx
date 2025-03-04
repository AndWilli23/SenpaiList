import React from "react";
import Sidebar from "../../../layout/Sidebar.jsx";
import { Spinner } from "react-bootstrap";


const Loading = () => {
   
    return (
    <>
        <Sidebar/>
        <div style={{position: "absolute",  left: "0", bottom: "0", top: "0", right: "0"}} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="info" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        
    </>
    
)
    
}

export default Loading;