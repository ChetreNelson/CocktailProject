import axios from "axios";
export function getCocktailCategories() {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`,
    }).then((res) => {
      console.log(res);
      resolve(res?.data?.drinks);
    });
  });
}

export  function getCocktailBycategory() {
  return  new Promise((resolve,reject)=>{
    axios({
        method:"get",
        url:`www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`,
    }).then((res)=>{
        resolve(res?.data?.categories);
    });

  })
}

