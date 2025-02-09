import React from "react";
import { Form, Button } from "react-bootstrap";

const FormSearch = ({animesRef, searchApi}) => {
    return(
        <Form >
            <Form.Group controlId="formSearch" className="d-flex gap-4 p-4">
                <Form.Label></Form.Label>
                <Form.Control
                ref={animesRef}
                type="search"
                placeholder="Digite um anime: "
                ></Form.Control>
                <Button onClick={searchApi}>Buscar</Button>
            </Form.Group>
        </Form>
    )
}

export default FormSearch;