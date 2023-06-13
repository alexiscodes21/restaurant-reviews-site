import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../features/restaurants/restaurantsSlice";
import RestaurantDetail from "../features/restaurants/RestaurantDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const RestaurantDetailPage = () => {
  const { restaurantId } = useParams();
  const restaurant = selectRestaurantById(restaurantId);

  return (
    <Container>
      <SubHeader current={restaurant.name} detail={true} />
      <Row>
        <RestaurantDetail restaurant={restaurant} />
        <CommentsList restaurantId={restaurantId} />
      </Row>
    </Container>
  );
};

export default RestaurantDetailPage;
