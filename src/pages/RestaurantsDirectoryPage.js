import { Container } from "reactstrap";
import RestaurantsList from "../features/restaurants/RestaurantsList";
import SubHeader from "../components/SubHeader";

const RestaurantsDirectoryPage = () => {
  return (
    <Container>
      <SubHeader current="Directory" />
      <RestaurantsList />
    </Container>
  );
};
export default RestaurantsDirectoryPage;
