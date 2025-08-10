import React from "react"
import "../pages/animes/components/index.css"
import { Link } from "react-router-dom"
import "./layout.css"


const Header = () => {


    return( 
        
        <header className="p-2 py-4 sticky-top " style={{backgroundColor: "#2B2B3A"}}>
            <div className="d-flex align-items-center">
                <Link className="navbar-brand" to={"/"}>
                    <span className="fw-bold text-light ps-3 fs-1"  style={{ fontSize: "2.4rem"}}>
                        Senpai List
                    </span>
                </Link>
                <div className=" d-flex gap-4 ps-5">
                    <Link className="item-header navbar-brand d-flex" to={"/allAnimes"}>
                        <span>All Top Animes</span>
                    </Link>
                    <Link className="item-header navbar-brand d-flex" to={"/allAnimesSearched"}>
                        <span>Search</span>
                    </Link>
                    <Link className="item-header navbar-brand d-flex" to={"/"}>
                        <span>This Season</span>
                    </Link>
                </div>
            </div>    
        </header>
       

    )
}

export default Header