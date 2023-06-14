import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const { id, image, name } = restaurant;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle style={{ textAlign: "center" }}>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
