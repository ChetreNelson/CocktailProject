import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>hello this is cocktailrecipe</h1>
      <Link to={"/cocktail"}>
        <button>Recipe</button>
      </Link>
    </div>
  );
}

export default Home;
