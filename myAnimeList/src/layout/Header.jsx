import React from "react"
import "../pages/animes/components/index.css"
import { Link } from "react-router-dom"


const Header = () => {


    return( 
        
        <header className="p-2 " style={{backgroundColor: "#2A95BF"}}>
            <div className="">
                <Link className="navbar-brand d-flex align-items-center justify-content-center" to={"/home"}>
                    <i className="bi bi-stars fs-2 me-2" style={{ color: "#04BF8A" }}></i>
                    <span  style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>
                        Senpai List
                    </span>
                    <i className="bi bi-rocket-takeoff fs-2 ms-2" style={{ color: "#04BF8A" }}></i>
                </Link>
            </div>    
        </header>
       

    )
}

export default Header