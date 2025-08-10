import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "./notFoundImage.png"; 

const NotFound = () => {
  return (
    <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <img 
        src={notFoundImage} 
        alt="Página não encontrada" 
        className="img-fluid" 
        style={{ maxWidth: "400px", borderRadius: "10px" }} 
      />
      <h2 className="text-warning mt-3 fs-2">Ops! Pag not found!.</h2>
      <p className="text-dark fs-4">It seems like this anime got lost just like Zoro...</p>
      <Link to="/" className="btn btn-outline-info mt-3 px-5">
          Back to main screen
      </Link>
    </div>
  );
};

export default NotFound;