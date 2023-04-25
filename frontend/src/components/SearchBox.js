import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    if (keyword.trim()) {
      history(`/search/${keyword}`);
    } else {
      history("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col xs={12} md={8}>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-md-2 ml-md-5 w-100"
          ></Form.Control>
        </Col>
        <Col></Col>
        <Col xs={12} md={3} className="mt-2 mt-md-0">
          <Button type="submit" variant="outline-light" className="p-2 w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
