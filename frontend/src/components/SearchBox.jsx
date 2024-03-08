import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Form className="d-flex">
      <Form.Control
        type="text"
        name="q"
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2 mx-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
