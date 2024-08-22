import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

import "./MyNavbar.css";

function MyNavbar() {
  const expand = "md";
  return (
    <Navbar
      key={expand}
      style={{ backgroundColor: "#D6EFD8" }}
      expand={expand}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand className="lalezar fs-4" href="#">
          تست API فیک
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/">
                صفحه اصلی
              </NavLink>
              <NavLink className="nav-link" to="/add-article">
                ساخت مقاله
              </NavLink>
              <NavLink className="nav-link" to="/about">
                درباره ما
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
