import { Col, Row } from "reactstrap";
import RestaurantCard from "./RestaurantCard";
import { selectAllRestaurants } from "./restaurantsSlice";

const RestaurantsList = ({ setRestaurantId }) => {
  const restaurants = selectAllRestaurants();

  return (
    <Row className="ms-auto">
      {restaurants.map((restaurant) => {
        return (
          <Col md="5" className="m-4" key={restaurant.id} onClick={() => setRestaurantId(restaurant.id)}>
            <RestaurantCard restaurant={restaurant} />
          </Col>
        );
      })}
    </Row>
  );
};

export default RestaurantsList;
