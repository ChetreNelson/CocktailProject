import React from "react";
import styles from "./CocktailCard.module.css";
import { Link } from "react-router-dom";

function CocktailCard(props) {
  return (
    <div className={styles.cocktailCardWrapper}>
      <Link to={`/cocktail/${props.drinks.idDrink}`}>
        <img
          src={props.drinks.strDrinkThumb}
          alt="drinks"
          className={styles.cardImage}
        />
      </Link>
      <div className={styles.contentWrapper}>
        <span className={styles.drinksTitle}>{props?.drinks?.strDrink}</span>
      </div>
    </div>
  );
}

export default CocktailCard;
