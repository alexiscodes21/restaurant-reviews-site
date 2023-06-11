import { RESTAURANTS } from "../../shared/RESTAURANTS";
import { Row, Col } from 'reactstrap';
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
  return (
    <Row className="ms-auto">
      {" "}
      {RESTAURANTS.map((restaurant) => {
        return (
          <Col md="5" className="m-4" key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        );
      })}
    </Row>
  );
};

export default RestaurantsList;