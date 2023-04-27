import styles from "../../styles/Account.module.css";
import Link from "next/link";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
// import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

const MealPlans = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedButton, setSelectedButton] = useState(0);
  const [formData, setFormData] = useState({
    dayOfWeek: [],
    recipeId: ["", "", ""],
  });
  const [recipes, setRecipes] = useState([]);
  const dayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    // fetch all recipes
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newRecipeIds = [...formData.recipeId];
    newRecipeIds[index] = value;
    setFormData({
      ...formData,
      [name]: value,
      recipeId: newRecipeIds,
    });
  };

  const handleDayClick = (day) => {
    setSelectedButton(day);
    setFormData({
      ...formData,
      dayOfWeek: day,
    });
  };

  //returns the existing meal plan for that day, or null if one does not exist.
  const checkExistingMealPlan = (dayOfWeek) => {
    return mealPlans.find((mealPlan) => mealPlan.dayOfWeek === dayOfWeek);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const timestamp = Date.now(); // get the current timestamp
  
    const existingMealPlan = checkExistingMealPlan(formData.dayOfWeek);
  
    if (existingMealPlan) {
      // Update the existing meal plan
      fetch(`http://localhost:3001/mealplan/${existingMealPlan._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp }), // include the timestamp
      })
        .then((response) => response.json())
        .then((data) => {
          const updatedMealPlans = mealPlans.map((mealPlan) =>
            mealPlan._id === data._id ? data : mealPlan
          );
          setMealPlans(updatedMealPlans);
          setFormData({
            dayOfWeek: "",
            recipeId: "",
          });
        })
        .catch((error) => console.log(error));
    } else {
      // Create a new meal plan
      fetch("http://localhost:3001/mealplan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, timestamp }), // include the timestamp
      })
        .then((response) => response.json())
        .then((data) => {
          setMealPlans([...mealPlans, data]);
          setFormData({
            dayOfWeek: "",
            recipeId: "",
          });
          console.log(formData)
        })
        .catch((error) => console.log(error));
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderComponent></HeaderComponent>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Meal Plans</h1>
          <p>
            To get started, click on one of the days and seelct three meals from
            the drop down menu.
            <br />
            Once you're happy with the selection click add to meal plan. <br />
            Do this for each day you want a meal plan for, then click save to
            return back to your account.
          </p>
        </div>
        <Link href='/account'>Save & Exit</Link>
        <div className={styles.mealplanMain}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="dayOfWeek">Select Day of Week:</label>
            <div className={styles.mealplanDays}>
              {dayOfWeek.map((day) => (
                <Button
                  key={day}
                  variant={selectedButton === day ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
            <div className={styles.mealplanSelection}>
              <h2>Recipe Selection</h2>
              {[0, 1, 2].map((index) => (
                <div key={index}>
                  <label htmlFor={`recipe${index}`}>Meal {index + 1}:</label>
                  <select
                    id={`recipe${index}`}
                    name={`recipe${index}`}
                    value={formData.recipeId[index]}
                    onChange={(event) => handleChange(event, index)}
                    required
                  >
                    <option value="">-- Select Recipe --</option>
                    {recipes.map((recipe) => (
                      <option key={recipe._id} value={recipe._id}>
                        {recipe.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <Button type="submit" color="primary">
                Add to Meal Plan
              </Button>
            </div>
          </form>
          <div className={styles.mealplanTitle}>
            <h2>Your Meal Plan</h2>
            <div className={styles.mealplanView}>
              {mealPlans.map((mealPlan) => (
                <li key={mealPlan._id}>
                  <strong>{mealPlan.dayOfWeek}:</strong>
                  {/* {mealPlan.recipeId} */}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default MealPlans;
