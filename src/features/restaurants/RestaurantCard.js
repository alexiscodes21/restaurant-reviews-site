import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const RestaurantCard = ({ restaurant }) => {
  const { image, name } = restaurant;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle style={{ textAlign: "center"}}>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default RestaurantCard;
