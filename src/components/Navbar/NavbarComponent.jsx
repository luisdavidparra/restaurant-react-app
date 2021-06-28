import React, { useEffect } from "react";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import { Navbar, Nav, NavItem, Collapse, NavbarToggler, Form, Input, Col, Row, Container } from "reactstrap";
import { useState } from "react";

const NavbarComponent = ({ searchProduct }) => {
  const { shoppingCartItems } = useDataContext();
  const [isOpen, setIsOpen] = useState(false);
  const [amountOfItems, setAmountOfItems] = useState(0);

  useEffect(() => {
    const newAmount = shoppingCartItems.reduce((total, { amount }) => {
      return total + amount;
    }, 0);

    setAmountOfItems((amountOfItems) => newAmount);
  }, [shoppingCartItems]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Row>
          <Col xs="12" md="6" className="order-md-0 order-2">
            <Navbar color="faded" light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link
                      to="/"
                      className="nav-link text-center active"
                      color="link"
                      onClick={() => searchProduct("home")}
                    >
                      <b>Home</b>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/"
                      color="link"
                      className="nav-link text-center active"
                      onClick={() => searchProduct("burger")}
                    >
                      Burger
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/"
                      className="nav-link text-center active"
                      color="link"
                      onClick={() => searchProduct("soda")}
                    >
                      Soda
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/"
                      className="nav-link text-center active"
                      color="link"
                      onClick={() => searchProduct("combo")}
                    >
                      Combo
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/"
                      className="nav-link text-center active"
                      color="link"
                      onClick={() => searchProduct("extra")}
                    >
                      Extra
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/"
                      className="nav-link text-center active"
                      color="link"
                      onClick={() => searchProduct("ice cream")}
                    >
                      Ice Cream
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          <Col md="6" xs="12">
            <Row>
              <Col md="8" lg="9" xs="7" className="align-self-end">
                <Form>
                  <Input placeholder="Search product" onChange={(e) => searchProduct(e.target.value)} />
                </Form>
              </Col>
              <Col>
                <Link className="nav-link text-center active" aria-current="page" to="/pay">
                  <img src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="" />
                  <span className="badge bg-primary rounded-pill position-absolute top-0 mt-1">{amountOfItems}</span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavbarComponent;
