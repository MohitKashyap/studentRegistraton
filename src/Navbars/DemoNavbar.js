import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>

              <h1 className="display-3 text-white">IIDS</h1>

            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">

                    <h1 className="display-3 text-white">IIDS</h1>

                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                {/* <NavItem>
                  <NavLink href="/home" to="/home">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/register" >
                    Contact Us
                    </NavLink>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/Iids-Institute-1005864446286959"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                    </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/iidsinstitute"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                    </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/institute"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                    </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://in.pinterest.com/iidsInstitute"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <i className="fa fa-pinterest" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Pinterest
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Follow us on Pinterest
                    </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.linkedin.com/in/iids-institute-480a30183"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Linkedin
                      </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Follow us on Linkedin
                    </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default DemoNavbar;
