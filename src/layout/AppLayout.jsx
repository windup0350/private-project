import React from 'react'
import "./AppLayout.style.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';// Router 안에 있는 자손들을 호출

const AppLayout = () => {
  return (
    <div className='no-padding'>
      <Navbar expand="lg" className="bg-body-tertiary no-padding">
        <Container fluid className='Navbar-Container navi-back'>
          <Navbar.Brand href="#">MY CINEMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="tab-text">Home</Nav.Link>
              <Nav.Link href="/movies" className="tab-text">映画</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">検索</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default AppLayout
