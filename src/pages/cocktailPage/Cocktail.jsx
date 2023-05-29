import React, { useEffect } from "react";
import { getCocktailCategories } from "../../api/Cocktail";
import styles from './Cocktail.module.css'
export default function Cocktail() {
  const [categories, setCategories] = React.useState([]);
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
      {categories.map((data) => (
        <div>{data?.strCategory}</div>
      ))}
      </div>
    </div>
  );
}
