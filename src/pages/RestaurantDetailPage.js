import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../features/restaurants/restaurantsSlice";
import RestaurantDetail from "../features/restaurants/RestaurantDetail";

const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();
  const restaurant = selectRestaurantById(restaurantId);

  return (
    <Container>
      <Row>
        <RestaurantDetail restaurant={restaurant} />
      </Row>
    </Container>
  );
};

export default RestaurantDetailPage;