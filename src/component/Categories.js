import React from "react";
import CategoriesData from "../common/CategoriesData";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import Heading from "../common/Heading";
import { GoArrowRight } from "react-icons/go";
import { Element } from "react-scroll";
import FreshFruitImage from "../Assets/images/categories/FreshFruit.svg";
import VagetablesImage from "../Assets/images/categories/Vagetables.svg";
import FishImage from "../Assets/images/categories/Fish.svg";
import SnacksImage from "../Assets/images/categories/Snacks.svg";
import BeveragesImage from "../Assets/images/categories/Beverages.svg";
import BeautyImage from "../Assets/images/categories/Beauty.svg";
import BakeryImage from "../Assets/images/categories/Bakery.svg";
import BakingImage from "../Assets/images/categories/Baking.svg";
import CookingImage from "../Assets/images/categories/Cooking.svg";
import DiabeticImage from "../Assets/images/categories/Diabetic.svg";
import DetergentsImage from "../Assets/images/categories/Detergents.svg";
import OilImage from "../Assets/images/categories/Oil.svg";
const Categories = () => {
  const Data = [
    {
      src: FreshFruitImage,
      alt: "FreshFruit",
      title: "Fresh Fruit",
    },
    {
      src: VagetablesImage,
      alt: "Vagetables",
      title: "Fresh Vegetables",
    },
    {
      src: FishImage,
      alt: "Fish",
      title: "Meat & Fish",
    },
    {
      src: SnacksImage,
      alt: "Snacks",
      title: "Snacks",
    },
    {
      src: BeveragesImage,
      alt: "Beverages",
      title: "Beverages",
    },
    {
      src: BeautyImage,
      alt: "Beauty",
      title: "Beauty & Health",
    },
    {
      src: BakeryImage,
      alt: "Bakery",
      title: "Bread & Bakery",
    },
    {
      src: BakingImage,
      alt: "Baking",
      title: "Baking Needs",
    },
    {
      src: CookingImage,
      alt: "Cooking",
      title: "Cooking",
    },
    {
      src: DiabeticImage,
      alt: "Diabetic",
      title: "Diabetic Food",
    },
    {
      src: DetergentsImage,
      alt: "Detergents",
      title: "Dish Detergents",
    },
    {
      src: OilImage,
      alt: "Oil",
      title: "Oil",
    },
  ];
  return (
    <Element id="shop" name="shop" className="element">
      <CstmContainer>
        <div className="spacer">
          <Heading
            title="Popular Categories"
            text="View ALL"
            icon={<GoArrowRight />}
          />
          <CstmRow>
            {Data.map((data, index) => {
              return (
                <CstmCol xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
                  <CategoriesData
                    src={data.src}
                    alt={data.alt}
                    title={data.title}
                  />
                </CstmCol>
              );
            })}
          </CstmRow>
        </div>
      </CstmContainer>
    </Element>
  );
};
export default Categories;
