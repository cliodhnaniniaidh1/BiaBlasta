import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Pantry.module.css";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import ingredientsData from "./ingredientsData";

const IngredientSelection = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const router = useRouter();

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Convert the selectedIngredients array into a comma-separated string
    const ingredientsString = selectedIngredients.join(',');
  
    // Redirect to the /recipes/search page with the ingredients as a query parameter
    router.push(`/recipe?ingredients=${encodeURIComponent(ingredientsString)}`);
  };
  
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h1>Select Ingredients</h1>
        <p>
          The more ingredients you select, the more recipes we can find for you
          to make!
        </p>
        <div className={styles.content}>
          <form>
            <div className={styles.buttonContent}>
              <div className={styles.button}>
                {/* <p onClick={navigateToRecipes}>Find Recipes!</p> */}
                <p onClick={handleSubmit}>Find Recipes!</p>
              </div>
            </div>
            <div className={styles.grid}>
              {Object.keys(ingredientsData).map((category) => (
                <div className={styles.card}>
                  <div key={category}>
                    <h2>{category}</h2>
                    {ingredientsData[category].map((ingredient) => (
                      <div key={ingredient.name}>
                        <label>
                          <input
                            type="checkbox"
                            value={ingredient.name}
                            onChange={handleChange}
                          />{" "}
                          {ingredient.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default IngredientSelection;
