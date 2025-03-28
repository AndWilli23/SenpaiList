import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormSearch = ({ animesRef, searchApi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi();
  };

  return (
    <Form className="mx-5 p-3" onSubmit={handleSubmit}>
      <Form.Group controlId="formSearch" className="d-flex gap-3">
        <Form.Control
          className="rounded-start"
          ref={animesRef}
          type="search"
          placeholder="Digite um anime: "
          onKeyDown={(e) => { if (e.key === "Enter") searchApi(); }}
        />
        <Link to={"/allAnimesSearched"}>
          <Button onClick={searchApi}>Buscar</Button>
        </Link>
      </Form.Group>
    </Form>
  );
};

export default FormSearch;