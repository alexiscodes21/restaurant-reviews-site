import { Col, Row } from "reactstrap";
import RestaurantCard from "./RestaurantCard";
import { selectAllRestaurants } from "./restaurantsSlice";

const RestaurantsList = () => {
  const restaurants = selectAllRestaurants();

  return (
    <Row className="ms-auto">
      {" "}
      {restaurants.map((restaurant) => {
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
