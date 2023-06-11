import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const RestaurantCard = (props) => {
  return (
    <Card>
      <CardImg width="100%" src={props.restaurant.image} alt={props.restaurant.name} />
      <CardImgOverlay>
        <CardTitle>{props.restaurant.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default RestaurantCard;
