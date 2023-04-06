import styles from "../../styles/Recipe.module.css";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client'
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
import React, { useState } from "react";
import FavoriteButton from "../../src/components/FavouriteButton";
import { useRouter } from "next/router";

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
  const {user} = useUser();
  const router = useRouter();

  async function handleFavoriteClick(recipeId) {
    try {
      const response = await fetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: recipe._id }),
      });

      if (!response.ok) {
        throw new Error("Failed to save recipe to favorites");
      }
      const favorite = await response.json();
      setIsFavorited(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderComponent></HeaderComponent>
        </div>
        <div className={styles.main}>
          <div className={styles.title}>
            <h3>{recipe.name}</h3>
          </div>
          <div>
            Login to Add to favourites
          </div>
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
              <p>{recipe.catagory}</p>
              <p>{recipe.servingSize}</p>
              <div className={styles.steps}>
                <div>
                  {recipe.steps.map((steps) => {
                    return <p>{steps}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderComponent></HeaderComponent>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <h3>{recipe.name}</h3>
        </div>
        <div>
          {isFavorited ? (
            <p>Recipe added to favorites!</p>
          ) : (
            <button onClick={handleFavoriteClick}>Add to favorites</button>
          )}
        </div>
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
            <p>{recipe.catagory}</p>
            <p>{recipe.servingSize}</p>
            <div className={styles.steps}>
              <div>
                {recipe.steps.map((steps) => {
                  return <p>{steps}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Details;
