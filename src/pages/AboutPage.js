import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            At Plantopia, our mission is to nourish and inspire individuals through the power of plant-based cuisine. We are committed to creating a
            sustainable and compassionate dining experience that celebrates the richness and diversity of vegan food. Through our innovative and
            flavorful creations, we aim to redefine the perception of plant-based dining, making it accessible, enticing, and satisfying for all. With
            a focus on fresh, locally sourced ingredients, we strive to promote a healthier, cruelty-free lifestyle while fostering a sense of
            community and respect for the planet. At Plantopia, we believe in the transformative potential of plant-based cuisine, and we invite you
            to embark on a culinary journey that not only tantalizes your taste buds but also contributes to a more sustainable and compassionate
            world.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-secondary text-white text-center">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">January 5, 2015</dd>
                <dt className="col-6">No. of Restaurants in 2023</dt>
                <dd className="col-6">563</dd>
                <dt className="col-6">No. of Reviews in 2023</dt>
                <dd className="col-6">2,958</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">285</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody className="blockquote">
              <p> The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.</p>
              <footer className="blockquote-footer">
                Ann Wigmore, <cite title="Source Title">"The Wheatgrass Book" - 1985</cite>
              </footer>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Community Partners</h3>
        </Col>
        <PartnersList />
      </Row>
    </Container>
  );
};

export default AboutPage;
