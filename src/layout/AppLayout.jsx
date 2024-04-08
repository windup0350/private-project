import React, { useState } from "react";
import "./AppLayout.style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom"; // Router 안에 있는 자손들을 호출

const AppLayout = () => {
  const [keyword, setKeyword] = useState(""); //[240406]
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    //[240406]
    event.preventDefault();
    navigate(`/movies/search?q=${keyword}`); // URL 바꿔주기
    setKeyword(""); // 검색후 공란으로
  };

  return (
    <div className="no-padding">
      <Navbar expand="lg" className="bg-body-tertiary no-padding">
        <Container fluid className="Navbar-Container navi-back">
          <Navbar.Brand href="/">MY CINEMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="tab-text">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="tab-text">
                List
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword} //[240406]
                onChange={(event) => setKeyword(event.target.value)} //[240406] 변화시마다 세팅
              />
              <Button variant="danger" type="submit" className="search-button">
                検 索
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
