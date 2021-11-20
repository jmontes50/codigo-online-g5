import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { CarritoContext } from "../context/carritoContext";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navegacion() {
    const { signOut } = useContext(AuthContext);
    const { carrito } = useContext(CarritoContext);

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
                        <Link className="nav-link" to="/carrito">
                            <Badge badgeContent={10} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                        <NavLink onClick={signOut}>Salir</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
