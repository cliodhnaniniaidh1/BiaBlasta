import styles from "../../styles/Recipe.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/recipe");
  const data = await res.json();

  const paths = data.map((recipe) => ({
    params: { _id: recipe._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params._id;
  const res = await fetch("http://localhost:3001/recipe/" + name);
  const data = await res.json();
  return {
    props: { recipe: data },
  };
};

const Details = ({ recipe }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favorites, setFavorites] = useState();
  const { user } = useUser();

  async function handleFavoriteClick() {
    // Save the recipe to favorites
    try {
      const response = await fetch(
        `http://localhost:3001/favorites/${recipe._id}`
      );

      if (!response.ok) {
        throw new Error("Failed to check if recipe is favorited");
      }

      //checks for duplicates in database
      const favoritesData = await response.json();
      const recipeId = recipe._id;

      const isRecipeInFavorites = favoritesData.some((favorite) => {
        return favorite.recipeId._id === recipeId;
      });

      if (isRecipeInFavorites) {
        console.log("This recipe is already in favorites");
        alert("This recipe is already in favorites");
      } else {
        console.log("This recipe is not yet in favorites");
        const postResponse = await fetch("http://localhost:3001/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipeId: recipe._id }),
        });

        if (!postResponse.ok) {
          throw new Error("Failed to save recipe to favorites");
        }

        const favorite = await postResponse.json();
        setFavorites(favorite);
        setIsFavorited(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <div className={styles.title}>
          <h3>{recipe.name}</h3>
        </div>
        ***Image***
        {!user ? (
          <div>Login to add to favourites</div>
        ) : (
          <div>
            {isFavorited ? (
              <div>
                <p>Added to favorites!</p>
              </div>
            ) : (
              <FontAwesomeIcon
                onClick={handleFavoriteClick}
                icon={faPlus}
                style={{ color: "#f4796c" }}
              />
            )}
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.ingredients}>
            <h3>Ingredients List</h3>
            <div>
              {recipe.ingredients.map((ingredients) => {
                return <p>{ingredients}</p>;
              })}
            </div>
          </div>
          <div className={styles.description}>
            <p>{recipe.description}</p>
            <p>Catagory: {recipe.catagory}</p>
            <p>Serving Size: {recipe.servingSize}</p>

            <div className={styles.steps}>
              {recipe.steps.map((steps) => {
                return <p>{steps}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};
export default Details;
