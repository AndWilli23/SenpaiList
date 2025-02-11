import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Characters from './Characters';

function OffCanvas({name, character, characterAbout}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Characters  handleShow={handleShow} character={character.images.jpg.image_url} />

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column align-items-center'>
            <img style={{width: "16rem", height: "22rem"}} 
            className="p-1 shadow-lg border border-warning d-flex justify-content-center" 
            src={character.images.jpg.image_url} 
            alt="Imagem do personagem selecionado" />
            {characterAbout === null ? (<p className='p-3 text-center'>Descrição indisponível ou inexistente</p>) : ( <p className='p-3 text-center'>{characterAbout}</p>)}
           
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;