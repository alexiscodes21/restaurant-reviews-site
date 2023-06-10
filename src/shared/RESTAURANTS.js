import leafyBites from "../assets/img/leafy-bites.jpg";
import herbHaven from "../assets/img/herb-haven.jpg";
import rootAndStem from "../assets/img/root-and-stem.jpg";
import gardenDelights from "../assets/img/garden-delights.jpg";

export const RESTAURANTS = [
  {
    id: 0,
    name: "Leafy Bites",
    image: leafyBites,
    elevation: 1233,
    featured: false,
    description: "A cozy and casual vegan restaurant offering a wide range of plant-based dishes made with fresh, locally sourced ingredients.",
  },
  {
    id: 1,
    name: "Herb Haven",
    image: herbHaven,
    elevation: 877,
    featured: false,
    description:
      "A modern and vibrant vegan eatery known for its innovative and flavorful herb-infused dishes that cater to different dietary preferences.",
  },
  {
    id: 2,
    name: "Root and Stem",
    image: rootAndStem,
    elevation: 2901,
    featured: false,
    description:
      "A trendy and upscale vegan restaurant featuring an eclectic menu focused on root vegetables and plant-based proteins cooked to perfection.",
  },
  {
    id: 3,
    name: "Garden Delights",
    image: gardenDelights,
    elevation: 42,
    featured: true,
    description:
      "A charming and garden-inspired vegan cafe serving delicious and wholesome meals crafted from seasonal produce and artisanal plant-based ingredients.",
  },
];
