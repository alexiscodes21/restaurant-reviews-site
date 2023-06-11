import { RESTAURANTS } from "../../shared/RESTAURANTS";

 export const selectAllRestaurants = () => {
   return RESTAURANTS;
 };

 export const selectRandomRestaurant = () => {
     return RESTAURANTS[Math.floor(RESTAURANTS.length * Math.random())]
 };