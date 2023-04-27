import styles from "../../styles/Results.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
import { useRouter } from "next/router";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();
  const imageURL = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/";
  const { ingredients } = router.query;

  useEffect(() => {
    const fetchRecipes = async () => {
      const ingredientsParams = new URLSearchParams({
        ingredients: ingredients,
      }).toString();

      const response = await fetch(
        `http://localhost:3001/recipes/search?${ingredientsParams}`
      );
      const data = await response.json();
      setRecipes(data);
    };

    if (ingredients) {
      fetchRecipes();
    }
  }, [ingredients]);

  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h3>Here's what we found!</h3>
        <div className={styles.grid}>
          <h3>{recipes.title}</h3>
          {recipes.map((recipe) => (
            <div className={styles.card}>
              <Link href={"/recipe/" + recipe.id} key={recipe.id}>
                <img
                  src={imageURL + recipe.id + ".jpg"}
                  alt="logo"
                  height={250}
                  width={250}
                />
                <h3>{recipe.name}</h3>
                <p>{recipe.catagory}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Recipes;
