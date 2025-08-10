import React from "react";


const Characters = ({ character, handleShow }) => {
    return (
        <button  style={{width: "4.3vw", height: "12.5vh", minWidth: "4vw"}}  
            onClick={handleShow}
        >
            <img style={{width: "100%", height: "100%", border: "1px solid orange",
                }} 
                src={character} 
                alt="Characters" 
            />
        </button>
    );
};
export default Characters;