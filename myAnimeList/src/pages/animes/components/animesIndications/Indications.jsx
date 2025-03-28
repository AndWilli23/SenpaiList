import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Indication = ({ animes }) => {
  const navigate = useNavigate();

  const [firstIndication, setFirstIndication] = useState(null);
  const [segundIndication, setSegundIndication] = useState(null);

  useEffect(() => {
    if (animes.length > 0) {
      setFirstIndication(animes[Math.floor(Math.random() * animes.length)]);
      setSegundIndication(animes[Math.floor(Math.random() * animes.length)]);
    }
  }, [animes]); 

  const handleNavigate = useCallback((id) => {
      return () => navigate(`/detailsAnimes/${id}`);
  }, [navigate]);

  if (!firstIndication || !segundIndication) return <p className="text-center fs-2 p-5 text-warning">Carregando recomendações...</p>;

  return (
    <div className="p-4" style={{backgroundColor: "#013A40"}}>
      <div className="d-flex  align-items-center pb-4 m-5">
        <button aria-label={`Ver detalhes de ${firstIndication.title}`} style={{all: "unset", cursor: "pointer"}} onClick={handleNavigate(firstIndication.mal_id)}>
          <img
            className=""
            src={firstIndication.images.webp.image_url}
            alt={`Recomendação do anime: ${firstIndication.title}`}
          />
        </button>
        <div>
          <p className="fs-2 text-center text-light">{firstIndication.title}</p>
          <p className="my-4 mx-5 text-center text-light">{firstIndication.synopsis}</p>
          <div className="d-flex justify-content-center">
            <Button
              style={{ padding: "5px 9rem" }}
              onClick={handleNavigate(firstIndication.mal_id)}
            >
              Ver mais detalhes
            </Button>
          </div>
        </div>
      </div>

      <div className="d-flex  align-items-center justify-content-end pt-4 m-5 ">
        <button aria-label={`Ver detalhes de ${segundIndication.title}`} style={{all: "unset", cursor: "pointer"}} onClick={handleNavigate(segundIndication.mal_id)}>
          <img
            className=""
            src={segundIndication.images.webp.image_url}
            alt={`Recomendação do anime: ${segundIndication.title}`}
          />
        </button>
        <div>
          <p className="fs-2 text-center text-light">{segundIndication.title}</p>
          <p className="my-4 mx-5 text-center text-light">{segundIndication.synopsis}</p>
          <div className="d-flex justify-content-center">
            <Button
              style={{ padding: "5px 9rem" }}
              onClick={handleNavigate(segundIndication.mal_id)}
            >
              Ver mais detalhes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indication;