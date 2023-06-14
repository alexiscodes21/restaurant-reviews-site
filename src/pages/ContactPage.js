import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us" />
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Our Address</h5>
          <address>
            1 Plantopia St
            <br />
            New York, NY 12345
            <br />
            U.S.A.
          </address>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" /> 1-234-567-8900
          </a>
          <br />
          <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co">
            <i className="fa fa-envelope-o" /> plantopia@plantopia.co
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">TBD: ContactForm</Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
