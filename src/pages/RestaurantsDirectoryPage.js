import { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import RestaurantDetail from "../features/restaurants/RestaurantDetail";
import RestaurantsList from "../features/restaurants/RestaurantsList";
import { selectRestaurantById } from "../features/restaurants/restaurantsSlice";

const RestaurantsDirectoryPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  const selectedRestaurant = selectRestaurantById(restaurantId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <RestaurantsList setRestaurantId={setRestaurantId}/>
        </Col>
        <Col sm="7" md="5">
          <RestaurantDetail restaurant={selectedRestaurant} />
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantsDirectoryPage;
