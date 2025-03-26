import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const HomeSearch = () => {
    return (
        <div className=" d-flex justify-content-center text-white py-5 mt-5" style={{backgroundColor:"#013A40"}}>
            <div className="container text-center m-5">
                <h2 className="fw-bold mb-4 text-light">
                    Busque por seus animes favoritos ou descubra mais sobre aqueles que deseja conhecer melhor.
                </h2>
                <div className="py-4">
                    <Button className="btn btn-lg  shadow-sm px-4">
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
