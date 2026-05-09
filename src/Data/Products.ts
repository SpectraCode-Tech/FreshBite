import jollof from "../assets/jollof.jpeg";
import jfRice from "../assets/j&fRice.jpeg";
import friedRice from "../assets/friedrice.jpeg";
import plantain from "../assets/plantain.jpeg";
import turkey from "../assets/Turkey.jpeg";
import chicken from "../assets/chicken.jpeg";
import fish from "../assets/fish.jpeg";
import noodles from "../assets/noodles.jpeg";
import boiledEgg from "../assets/egg.jpeg";
import spag from "../assets/spag.jpeg";
import pepsi from "../assets/pepsi.jpeg";
import okra from "../assets/okra.jpeg";
import banga from "../assets/banga.jpeg";
import efo from "../assets/efo.jpeg";
import egusi from "../assets/egusi.jpeg";
import fanta from "../assets/fanta.jpeg";
import sprite from "../assets/sprite.jpeg";
import up from "../assets/7up.jpeg";
import water from "../assets/water.jpeg";
import coleslaw from "../assets/coleslaw.jpeg";
import schweppes from "../assets/canSchwepps.jpeg";
import canFanta from "../assets/canFanta.jpeg";
import canSprite from "../assets/canSprite.jpeg";
import canCoke from "../assets/canCoke.jpeg";
import eba from "../assets/eba.jpeg";
import fufu from "../assets/fufu.jpeg";
import semo from "../assets/semo.jpeg";
import amala from "../assets/amala.jpeg";

interface Products {
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export const Products = [
  {
    image: `${jollof}`,
    name: "Smoky Jollof Rice",
    description:
      "Rich, party-style Jollof rice infused with a deep smoky aroma and authentic spices.",
    price: "2500.00",
    category: "Main Course",
  },
  {
    image: `${friedRice}`,
    name: "Carribean Fried Rice",
    description:
      "A colorful blend of seasoned rice, vibrant vegetables, and sweet tropical undertones.",
    price: "29.99",
    category: "Main Course",
  },
  {
    image: `${fanta}`,
    name: "A bottle of Fanta",
    description:
      "Chilled orange soda with a bright, bubbly citrus flavor to refresh your palate.",
    price: "29.99",
    category: "Beverages",
  },
  {
    image: `${banga}`,
    name: "Banga Soup",
    description:
      "Traditional palm nut soup slow-cooked with indigenous spices and rich herbal notes.",
    price: "29.99",
    category: "Soups",
  },
  {
    image: `${egusi}`,
    name: "Egusi Soup",
    description:
      "A classic melon seed soup thickened with leafy greens and savory seasonings.",
    price: "29.99",
    category: "Soups",
  },
  {
    image: `${efo}`,
    name: "Vegetable Soup",
    description:
      "Healthy and hearty Efo Riro prepared with fresh spinach and a savory pepper base.",
    price: "29.99",
    category: "Soups",
  },
  {
    image: `${up}`,
    name: "A bottle of 7UP",
    description:
      "Crisp and clear lemon-lime flavored soda for an instant burst of refreshment.",
    price: "29.99",
    category: "Beverages",
  },
  {
    image: `${water}`,
    name: "Bottle Water",
    description:
      "Pure, clean, and refreshing premium bottled water to keep you hydrated.",
    price: "29.99",
    category: "Beverages",
  },
  {
    image: `${sprite}`,
    name: "A bottle of Sprite",
    description:
      "The ultimate thirst-quencher with its signature crisp, lemon-lime sparkling taste.",
    price: "29.99",
    category: "Beverages",
  },
  {
    image: `${okra}`,
    name: "Okra Soup",
    description:
      "Freshly sliced okra cooked to a perfect consistency with tasty local seasonings.",
    price: "29.99",
    category: "Soups",
  },
  {
    image: `${jfRice}`,
    name: "Jollof and Fried Rice Mix",
    description:
      "The best of both worlds: a satisfying combination of our Smoky Jollof and Fried Rice.",
    price: "3000.00",
    category: "Main Course",
  },
  {
    image: `${noodles}`,
    name: "Stir Fry Noodles",
    description:
      "Quick-fired noodles tossed with crunchy vegetables and savory Asian-inspired sauces.",
    price: "3000.00",
    category: "Main Course",
  },
  {
    image: `${spag}`,
    name: "Stir Fry Spaghetti",
    description:
      "Al dente spaghetti sautéed with colorful bell peppers, onions, and spicy seasonings.",
    price: "3000.00",
    category: "Main Course",
  },
  {
    image: `${fish}`,
    name: "Peppered Fish",
    description:
      "Golden fried fish coated in a spicy, finger-licking habanero and tomato sauce.",
    price: "29.99",
    category: "Proteins",
  },
  {
    image: `${turkey}`,
    name: "Peppered Turkey",
    description:
      "Succulent, deep-fried turkey chunks tossed in a rich and spicy pepper garnish.",
    price: "4000.00",
    category: "Proteins",
  },
  {
    image: `${chicken}`,
    name: "Peppered Chicken",
    description:
      "Tender chicken pieces glazed in a fiery pepper sauce for a bold flavor kick.",
    price: "3000.00",
    category: "Proteins",
  },
  {
    image: `${boiledEgg}`,
    name: "Boiled egg",
    description:
      "A simple, perfectly hard-boiled egg to add extra protein to any meal.",
    price: "300.00",
    category: "Proteins",
  },
  {
    image: `${plantain}`,
    name: "Fried Plantain",
    description:
      "Sweet, ripened plantain slices fried to a caramelized golden brown finish.",
    price: "400.00",
    category: "Sides",
  },
  {
    image: `${pepsi}`,
    name: "Bottled Pepsi Cola",
    description:
      "The classic bold cola taste served chilled for maximum enjoyment.",
    price: "600.00",
    category: "Beverages",
  },
  {
    image: `${coleslaw}`,
    name: "Creamy Coleslaw",
    description:
      "A crunchy, refreshing mix of shredded cabbage and carrots in a rich dressing.",
    price: "600.00",
    category: "Sides",
  },
  {
    image: `${canFanta}`,
    name: "A can of Fanta",
    description:
      "Conveniently canned Fanta Orange with that same great fruity, bubbly taste.",
    price: "600.00",
    category: "Beverages",
  },
  {
    image: `${schweppes}`,
    name: "A can of Schweppes",
    description:
      "Sophisticated and sparkling, perfect on its own or as a crisp meal accompaniment.",
    price: "600.00",
    category: "Beverages",
  },
  {
    image: `${canSprite}`,
    name: "A can of Sprite",
    description:
      "The classic clear soda in a chilled can for a quick, citrusy refresh.",
    price: "600.00",
    category: "Beverages",
  },
  {
    image: `${canCoke}`,
    name: "A can of Coke",
    description:
      "Iconic Coca-Cola flavor in a sleek can, perfect for any time of day.",
    price: "600.00",
    category: "Beverages",
  },
  {
    image: `${semo}`,
    name: "A wrap of Semo",
    description:
      "Smooth, fine-textured semolina swallow, expertly stirred for a light yet filling meal.",
    price: "600.00",
    category: "Swallows",
  },
  {
    image: `${amala}`,
    name: "A wrap of Amala",
    description:
      "Traditional yam flour swallow, light and fluffy with that distinct, authentic earthy flavor.",
    price: "600.00",
    category: "Swallows",
  },
  {
    image: `${eba}`,
    name: "A wrap of Eba",
    description:
      "Classic pan-fried cassava flakes (garri) transitioned into a firm, textured staple.",
    price: "600.00",
    category: "Swallows",
  },
  {
    image: `${fufu}`,
    name: "A wrap of Fufu",
    description:
      "Soft, stretchy, and smooth pounded cassava—the perfect companion for rich soups.",
    price: "600.00",
    category: "Swallows",
  },
];
