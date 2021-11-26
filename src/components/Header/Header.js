import React from 'react';

import { Navbar, Container, NavLink, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="text-decoration-none" to="/">
            {' '}
            <Navbar.Brand>
              <img
                src="https://i.ibb.co/27VCTG7/image.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span className=" ms-2 text-danger">Travelers</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link m-auto px-2" to="/">
                <Button variant="outline-dark border-0 ">Home</Button>
              </Link>
              <Link className="link m-auto px-2" to="/contact">
                <Button variant="outline-dark border-0 ">Contact</Button>
              </Link>

              {user.displayName && (
                <Link className="link m-auto px-2" to="/allOrders">
                  <Button variant="outline-dark border-0 ">
                    Manage All Bookings
                  </Button>
                </Link>
              )}
              {user.displayName && (
                <Link className="link m-auto px-2" to="/addNewServices">
                  <Button variant="outline-dark border-0 ">
                    Add New Services
                  </Button>
                </Link>
              )}
              {user.displayName && (
                <Link className="link m-auto px-2" to="/myOrders">
                  <Button variant="outline-dark border-0 ">My Bookings</Button>
                </Link>
              )}
              <Link className="link m-auto px-2" to="/about">
                <Button variant="outline-dark border-0 ">About</Button>
              </Link>
              {!user.displayName && (
                <Link className="link m-auto px-2" to="/login">
                  <Button variant="outline-dark border-0 ">Login</Button>
                </Link>
              )}

              {user.displayName && (
                <Navbar.Text>
                  Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
              )}
              {user.displayName && (
                <Button onClick={logOut} variant="outline-dark border-0 ">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
