import React from "react";

const Pagination = ({amountPags, pags, setPags}) => {

    const maxVisiblePages = 6;
    const half = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, pags - half);
    let endPage = Math.min(amountPags, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    return(
     <div className="d-flex justify-content-center text-info mb-5 " >
        <div className="border rounded px-4 py-2 d-flex gap-3">
            <button 
                className="text-center d-flex align-items-center"
                onClick={() => setPags(1)} 
                disabled={pags === 1}
            >
                <i className="bi bi-chevron-double-left"></i>
                <span className="pb-1 ps-1 pe-3 border-end ">First</span>               
            </button>

            <button 
                className="text-center d-flex align-items-center"
                onClick={() => setPags(pags - 1)} 
                disabled={pags === 1}
            >
                <i className="bi bi-chevron-left"></i>
                <span className="pb-1 ps-1 pe-3 border-end">Previous</span>
            </button>

            <div className="px-4">
                {startPage > 1 && <span className="pb-1">...</span>}

                {[...Array(endPage - startPage + 1)].map((_, i) => {
                    const page = startPage + i;
                    return (
                        <button 
                            className="  pb-1 px-4"
                            key={page} 
                            onClick={() => setPags(page)} 
                            style={{ 
                                color: page === pags && "#00FF6A",  
                            }}
                        >   
                            {page}
                        </button>
                    );
                })}

                {endPage < amountPags && <span>...</span>}
            </div>

            <button 
                className="text-center d-flex align-items-center"
                onClick={() => setPags(pags + 1)} 
                disabled={pags === amountPags}
            >   
                <span className="pb-1 pe-1 ps-3 border-start">Next</span>
                <i className="bi bi-chevron-right "></i>
            </button>

            <button 
                className="text-center d-flex align-items-center"
                onClick={() => setPags(amountPags)} 
                disabled={pags === amountPags}
            >
                <span className="pb-1 pe-1 ps-3 border-start">Last</span>
                <i className="bi bi-chevron-double-right"></i>
            </button>
        </div>
    </div>

    )
}

export default Pagination;