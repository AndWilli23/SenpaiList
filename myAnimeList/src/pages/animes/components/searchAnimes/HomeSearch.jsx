import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const HomeSearch = () => {
    return (
        <div className="d-flex justify-content-center mt-5 shadow-sm" style={{color: "#555555", backgroundColor:"#FAFAFA", padding: "7rem 0rem"}}>
            <div className="container text-center m-5">
                <h2 className="fw-bold mb-5">
                    Busque por seus animes favoritos ou descubra mais sobre aqueles que deseja conhecer melhor.
                </h2>
                <div className="py-5">
                    <Button className="btn btn-lg shadow-sm px-5" style={{backgroundColor: "#FF4D6D", border:"none"}}>
                        <Link  style={{all: "unset"}} to={"/allAnimesSearched"}>
                            Faça sua busca <i className="bi bi-search ms-2"></i>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;
