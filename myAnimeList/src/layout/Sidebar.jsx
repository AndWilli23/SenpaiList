import React from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"
import "../pages/animes/components/index.css"
import teste from "./teste.png"
import FormSearch from "../pages/animes/components/searchAnimes/FormSearch"



const Sidebar = ({isOpen, handleSideBar}) => {


 
    return( 
        
        <header style={{backgroundColor: "red"}}>
            <div>
                <img className="" style={{width: "15%"}} src="" alt="" />
                <p></p>
            </div>
            
        </header>
       
            /* {isOpen ? (
                <div  >
                    <button  className="open_button p-1"  onClick={handleSideBar}><i class="bi bi-list"></i></button>
                </div>
            ) : (
            <aside className="container_sidebar " 
            style={{
                backgroundColor: "#252525",
                width: isOpen ? "0" : "19.5%",
                overflow: "hidden",
                }}>
                <div className="d-flex justify-content-end " style={{position: "absolute", right: "0", alignItems:"start", height: "100vh", backgroundColor: "#181818" }}>
                    <button style={{backgroundColor: "#252525", padding: "4px"}} className="close_button rounded-end" onClick={handleSideBar}><i class="bi bi-chevron-left"></i></button>
                </div>
        
                <div className="pt-3 px-4 d-flex flex-column ">
                    <div className="text-center pe-5">
                        <h2 style={{color: "#00FFF6"}} className="pe-">S E N P A I</h2><h2 className="">L I S T</h2>
                    </div>
                </div>
               
                <div className="content_scroll "> 
                    <ul className="my-5">
                        <h5>Animes: </h5>
                        <div className="px-2 py-3 d-flex flex-column gap-4" >
        
        
                            <li className="d-flex flex-columne gap-2">
                                <i class="bi bi-tv"></i>
                                <Link className="link"  to={"/topAnimes"}>Animes Populares</Link>
                            </li>
        
                            <li  className="d-flex flex-columne gap-2">
                                <i class="bi bi-search"></i>
                                <Link className="link" to={"/searchAnimes"}>Busca por animes</Link>
                            </li>
        
                        </div>
        
                        <h5>Mangas: </h5>
                        <div className="px-2 py-3 d-flex flex-column gap-4" >
                        
                            <li  className="d-flex flex-columne gap-2">
                                <i class="bi bi-book"></i>
                                <Link className="link">Mangas Populares</Link>
                            </li>
                            <li  className="d-flex flex-columne gap-2">
                                <i class="bi bi-search"></i>
                                <Link className="link">Busca por mangas</Link>
                            </li>
                        </div>
                    </ul>
                    <ul>
                        <h5>Usuário: </h5>
                        <div  className="px-2 py-3 d-flex flex-column gap-4">
                            <li className="d-flex flex-columne gap-2">
                                <i class="bi bi-person-circle"></i>
                                Meu perfil
                            </li>
                            <li className="d-flex flex-columne gap-2">
                                <i class="bi bi-box-arrow-in-left"></i>
                                <Link className="link" to={"/"}>Log-out</Link>
        
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>  
        )} */
       

    )
}

export default Sidebar