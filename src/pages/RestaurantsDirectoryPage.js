import { Container, Row, Col, Button } from "reactstrap";
import RestaurantDetail from "../features/restaurants/RestaurantDetail";
import RestaurantsList from "../features/restaurants/RestaurantsList";
import { selectRandomRestaurant } from "../features/restaurants/restaurantsSlice";

const RestaurantsDirectoryPage = () => {
  let selectedRestaurant = selectRandomRestaurant();

  const toggleRestaurant = () => {
    selectedRestaurant = selectRandomRestaurant();
    console.log(selectedRestaurant);
  };

  return (
    <Container>
      {/* <Button onClick={() => toggleRestaurant()}>Select Random Restaurant</Button> */}
      <Row>
        <Col sm="5" md="7">
          <RestaurantsList />
        </Col>
        <Col sm="7" md="5">
          <RestaurantDetail restaurant={selectedRestaurant} />
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantsDirectoryPage;
