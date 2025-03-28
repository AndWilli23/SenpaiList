import React from "react";


const Characters = ({ character, handleShow }) => {
    return (
        <button style={{width: "80px", height: "130px"}}  
            onClick={handleShow}
        >
            <img style={{width: "100%", height: "100%", border: "1px solid orange",
                }} 
                src={character} 
                alt="Personagem" 
            />
        </button>
    );
};
export default Characters;