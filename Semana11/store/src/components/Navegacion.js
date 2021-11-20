import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navegacion() {
    const { signOut } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Store 5</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/checkout">
                            Checkout
                        </Link>
                    </Nav>
                    <Nav>
                        <NavLink onClick={signOut}>Salir</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
