import styles from "../../styles/Recipe.module.css";
import { Image } from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Recipe = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [favorites, setFavorites] = useState();
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`http://localhost:3001/recipes/${id}`);
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  async function handleFavoriteClick() {
    // Save the recipe to favorites
    try {
      const response = await fetch(
        `http://localhost:3001/favorites/${recipes.id}`
      );

      if (!response.ok) {
        throw new Error("Failed to check if recipe is favorited");
      }

      //checks for duplicates in database
      const favoritesData = await response.json();
      const recipeId = recipes.id;

      const isRecipeInFavorites = favoritesData.some((favorite) => {
        return favorite.recipeId.id === recipeId;
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
          body: JSON.stringify({ recipeId: recipes.id }),
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
          <h3>{recipes.name}</h3>
        </div>
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
              {recipes.ingredients &&
                recipes.ingredients.map((ingredient, index) => (
                  <p key={index}>{ingredient}</p>
                ))}
            </div>
          </div>
          <div className={styles.description}>
            <p>{recipes.description}</p>
            <p>Catagory: {recipes.catagory}</p>
            <p>Serving Size: {recipes.servingSize}</p>

            <div className={styles.steps}>
              {recipes.steps &&
                recipes.steps.map((step, index) => <p key={index}>{step}</p>)}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};
export default Recipe;
