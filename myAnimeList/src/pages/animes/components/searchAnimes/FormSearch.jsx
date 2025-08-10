import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormSearch = ({ animesRef, searchApi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi();
  };

  return (
    <>

      <div className="d-flex justify-content-center" >
          <h2 className="text-dark fs-1 text-center my-5 w-75 ">Search for your favorite anime or find out more about the ones you want to know more about.</h2>
      </div>
    
      <Form className="mx-5 p-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formSearch" className="d-flex gap-3">
          <Form.Control
            className="rounded-start"
            ref={animesRef}
            type="search"
            placeholder="type an anime: "
            onKeyDown={(e) => { if (e.key === "Enter") searchApi(); }}
          />
          <Link to={"/allAnimesSearched"}>
            <Button onClick={searchApi}>Search</Button>
          </Link>
        </Form.Group>
      </Form>
    </>
  );
};

export default FormSearch;