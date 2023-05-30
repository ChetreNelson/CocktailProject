import React, { useEffect, useState } from "react";
import { getCocktailCategories } from "../../api/Cocktail";
import styles from "./Cocktail.module.css";
export default function Cocktail() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState("Dessert");
  useEffect(() => {
    //api funciton call
    getCocktailCategories().then((res) => {
      setCategories(res);
    });
  });
  return (
    <div>
      <h1>recipe</h1>
      <div className={styles.CategoriesList}>
        {categories?.length > 0 &&
          categories?.map((data) => (
            <div key={data.idCategory}>
              <button
                className={styles.categoryItem}
                onClick={() => {
                  setSelectedcategory(data.strCategory);
                }}
              >
                {data?.strCategory}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
