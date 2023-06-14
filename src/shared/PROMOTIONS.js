import cookingClass from "../assets/img/cooking-class.jpg";
import farmToTable from "../assets/img/farm-to-table.jpg";
import foodAndWine from "../assets/img/food-wine.jpg";
import brunchClub from "../assets/img/vegan-brunch-club.jpg";

export const PROMOTIONS = [
  {
    id: 0,
    name: "Vegan Cooking Classes",
    image: cookingClass,
    featured: false,
    description:
      "Engaging hands-on classes where participants learn to prepare a variety of delicious plant-based dishes. Expert guidance and practical techniques make vegan cooking accessible and enjoyable for all.",
  },
  {
    id: 1,
    name: "Farm to Table Tour",
    image: farmToTable,
    featured: false,
    description:
      "Guided tours to local organic farms, showcasing sustainable practices and connecting guests with the source of their food. Experience the farm-to-table journey and gain insights into the benefits of locally sourced ingredients.",
  },
  {
    id: 2,
    name: "Vegan Food and Wine Pairing",
    image: foodAndWine,
    featured: false,
    description: `Discover the perfect harmony between vegan cuisine and a selection of fine wines. Indulge in thoughtfully curated pairings that elevate your dining experience and showcase the complementarity of plant-based flavors and quality vegan wines.`,
  },
  {
    id: 3,
    name: "Vegan Brunch Club",
    image: brunchClub,
    featured: true,
    description:
      "A vibrant gathering featuring a delectable vegan brunch menu. Enjoy a variety of mouthwatering plant-based dishes in a lively atmosphere, perfect for socializing and savoring the best of vegan cuisine.",
  },
];
