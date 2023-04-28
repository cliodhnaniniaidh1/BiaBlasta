import styles from "../../styles/Recipe.module.css";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Recipe = () => {
  const [isFavourited, setIsFavourited] = useState(false);
  const [favourites, setFavourites] = useState();
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const imageURL = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/";
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`http://localhost:3001/recipes/${id}`);
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  async function handleFavouriteClick() {
    // Save the recipe to favorites
    try {
      const response = await fetch(
        `http://localhost:3001/favourite/${recipes.id}`
      );

      if (!response.ok) {
        throw new Error("Failed to check if recipe is favourited");
      }

      //checks for duplicates in database
      const favouritesData = await response.json();
      const recipeId = recipes.id;

      const isRecipeInFavourites = favouritesData.some((favourite) => {
        return favourite.recipeId.id === recipeId;
      });

      if (isRecipeInFavourites) {
        console.log("This recipe is already in favourites");
        alert("This recipe is already in favourites");
      } else {
        console.log("This recipe is not yet in favourites");
        const postResponse = await fetch("http://localhost:3001/favourite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recipeId: recipes.id }),
        });

        if (!postResponse.ok) {
          throw new Error("Failed to save recipe to favourites");
        }

        const favourite = await postResponse.json();
        setFavourites(favourite);
        setIsFavourited(true);
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
            {isFavourited ? (
              <div>
                <p>Added to favourites!</p>
              </div>
            ) : (
              <FontAwesomeIcon
                onClick={handleFavouriteClick}
                icon={faPlus}
                style={{ color: "#f4796c" }}
              />
            )}
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.img}>
              <img
                src={imageURL + recipes.id + ".jpg"}
                alt="logo"
                height={250}
                width={250}
              />
            </div>
            <div className={styles.ingredients}>
              <h3>Ingredients List</h3>
              <div>
                {recipes.ingredients &&
                  recipes.ingredients.map((ingredient, index) => (
                    <p key={index}>{ingredient.quantity} {ingredient.name}</p>
                  ))}
              </div>
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
