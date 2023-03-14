import styles from "../styles/Pantry.module.css";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";

//Sending ingredients and recipes to be displayed on the webpage

export const getStaticProps = async () => {
  // const res1 = await fetch("http://localhost:3001/recipe");
  // const data1 = await res1.json();
  const res = await fetch("http://localhost:3001/ingredients");
  const data = await res.json();

  return {
    props: { ingredient: data },
  };
};

export default function Pantry({ ingredient, recipes }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedIngredients = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );

    const response = await fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: selectedIngredients }),
    });

    const recipes = await response.json();

    console.log(recipes);
  };

  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>The Pantry</h2>
          <p>
            Select the ingredients you have and we'll filter down the recipes
            for you to make!
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.filter}>
            <form onSubmit={handleSubmit}>
              <div className={styles.grid}>
                {ingredient.map((catagory) => (
                  <a className={styles.card}>
                    <div className={styles.subTitle}>{catagory.name}</div>
                    <div className={styles.description}>
                      {catagory.ingredients.map((ingredient) => {
                        return (
                          <div key={ingredient.name}>
                            <input
                              type="checkbox"
                              name={ingredient.name}
                              value={ingredient.name}
                            />
                            {ingredient.name}
                          </div>
                        );
                      })}
                    </div>
                  </a>
                ))}
              </div>
              <button type="submit">Filter Recipes</button>
            </form>
          </div>
          {/* <div className={styles.recipes}>
            {recipes.map((recipe) => (
              <Link href={"/recipe/" + recipe._id} key={recipe._id}>
                <div className={styles.card}>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
