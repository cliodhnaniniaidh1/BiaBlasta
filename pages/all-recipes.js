import styles from "../styles/Results.module.css";
import Link from "next/link";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import { useState, useEffect } from "react";

export default function AllRecipes() {
  const imageURL = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`http://localhost:3001/recipes`);
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h3>All Recipes</h3>
        <div className={styles.grid}>
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
}