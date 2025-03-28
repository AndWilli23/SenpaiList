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
      <h2 className="text-warning mt-3 fs-2">Ops! Página não encontrada.</h2>
      <p className="text-dark fs-4">Parece que este anime se perdeu igual ao Zoro...</p>
      <Link to="/home" className="btn btn-outline-info mt-3 px-5">
        Voltar para Home
      </Link>
    </div>
  );
};

export default NotFound;