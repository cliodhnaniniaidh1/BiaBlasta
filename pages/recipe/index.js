import styles from "../../styles/Results.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:3001/recipes/search");
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

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
                <p>***image***</p>
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