import { RESTAURANTS } from "../../shared/RESTAURANTS";

 export const selectAllRestaurants = () => {
   return RESTAURANTS;
 };

export const selectRestaurantById = (id) => {
   return RESTAURANTS.find((restaurant) => restaurant.id === id)
};

export const selectFeaturedRestaurant = () => {
  return RESTAURANTS.find((restaurant) => restaurant.featured);
}