import { RESTAURANTS } from "../../shared/RESTAURANTS";

 export const selectAllRestaurants = () => {
   return RESTAURANTS;
 };

export const selectRestaurantById = (id) => {
   return RESTAURANTS.find((restaurant) => restaurant.id === parseInt(id))
};

export const selectFeaturedRestaurant = () => {
  return RESTAURANTS.find((restaurant) => restaurant.featured);
}