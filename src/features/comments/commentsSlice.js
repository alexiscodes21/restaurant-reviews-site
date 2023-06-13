import { COMMENTS } from "../../shared/COMMENTS";

export const selectCommentsByRestaurantId = (restaurantId) => {
  return COMMENTS.filter((comment) => comment.restaurantId === parseInt(restaurantId));
};
