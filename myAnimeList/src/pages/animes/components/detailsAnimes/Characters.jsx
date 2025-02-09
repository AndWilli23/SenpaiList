import React from "react";


const Characters = ({character, handleShow}) => {

    return(
        <>
            <div className="d-flex">
                <button style={{width: "100%",  height: "25%", border: "none", background: "none", outline: "none", padding: "0"}}  className="p-0" onClick={handleShow}>
                    <img style={{width: "100%", height: "25%"}} className="border border-warning" src={character} alt={character.name}/>
                </button>
            </div>
        </>
    )
}

export default Characters;