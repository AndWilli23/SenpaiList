import React, { useState } from "react";

const Pagination = ({amountPags, pags, setPags}) => {

    const maxVisiblePages = 5;
    const half = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, pags - half);
    let endPage = Math.min(amountPags, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return(
     <div className="d-flex justify-content-center text-info pagination" >
        <button 
            onClick={() => setPags(1)} 
            disabled={pags === 1}
        >
            Primeira
        </button>

        <button 
            onClick={() => setPags(pags - 1)} 
            disabled={pags === 1}
        >
            Anterior
        </button>

        {startPage > 1 && <span>...</span>}

        {[...Array(endPage - startPage + 1)].map((_, i) => {
            const page = startPage + i;
            return (
                <button 
                    className="rounded mx-1"
                    key={page} 
                    onClick={() => setPags(page)} 
                    style={{ 
                        
                        backgroundColor: pags === page ? "#0dcaf0" : "#f8f9fa"   
                    }}
                >   
                    {page}
                </button>
            );
        })}

        {endPage < amountPags && <span>...</span>}

        <button 
            onClick={() => setPags(pags + 1)} 
            disabled={pags === amountPags}
        >
            Próxima
        </button>

        <button 
            onClick={() => setPags(amountPags)} 
            disabled={pags === amountPags}
        >
            Última
        </button>
    </div>


    )

    

}

export default Pagination;