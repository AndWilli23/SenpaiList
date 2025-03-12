import React from "react";
import { Form, Button } from "react-bootstrap";

const FormSearch = ({animesRef, searchApi}) => {
    return(
        <Form className="mx-5 p-3">
            <Form.Group controlId="formSearch" className="d-flex gap-3">
                <Form.Control
                    className="rounded-start"
                    ref={animesRef}
                    type="search"
                    placeholder="Digite um anime: "
                ></Form.Control>
                <Button className="" onClick={searchApi}>Buscar</Button>
            </Form.Group>
        </Form>
    )
}

export default FormSearch;