import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const RestaurantDetail = ({ restaurant }) => {
  const { image, name, description } = restaurant;

  return (
    <Col md="12" className="m-4">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RestaurantDetail;
