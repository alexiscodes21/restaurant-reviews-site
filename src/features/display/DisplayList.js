import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedRestaurant } from "../restaurants/restaurantsSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
  const items = [selectFeaturedRestaurant(), selectFeaturedPromotion()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;