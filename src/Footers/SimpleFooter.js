/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Thank you for supporting us!
                </h3>
              <h4 className=" mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
                </h4>
            </Col>
            <Col className=" text-lg-center btn-wrapper" lg="6">
              <Button
                className=" btn-neutral btn-icon-only btn-round ml-1"
                color="facebook"
                href="https://www.facebook.com/Iids-Institute-1005864446286959"
                id="tooltip383967593"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip383967593">
                Like us
                </UncontrolledTooltip>
              <Button
                className=" btn-neutral btn-icon-only btn-round ml-1"
                color="dribbble"
                href="https://www.instagram.com/iidsinstitute"
                id="tooltip568564532"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip568564532">
                Follow us
                </UncontrolledTooltip>
              <Button
                className=" btn-neutral btn-icon-only btn-round"
                color="twitter"
                href="https://twitter.com/institute"
                id="tooltip126536702"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip126536702">
                Follow us
                </UncontrolledTooltip>
              <Button
                className=" btn-neutral btn-pinterest btn-icon-only btn-round"
                color="twitter"
                href="https://in.pinterest.com/iidsInstitute"
                id="tooltip126536702"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-pinterest" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip126536702">
                Follow us
                </UncontrolledTooltip>
              <Button
                className=" btn-neutral btn-linkedin btn-icon-only btn-round"
                color="twitter"
                href="https://www.linkedin.com/in/iids-institute-480a30183"
                id="tooltip126536702"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip126536702">
                Follow us
                </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="#"
                  target="_blank"
                >
                  IIDS
                  </a>
                .
                </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    About Us
                    </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default SimpleFooter;
