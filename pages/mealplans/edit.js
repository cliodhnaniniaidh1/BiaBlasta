import styles from "../../styles/Account.module.css";
import Link from "next/link";
import HeaderComponent from "../../src/components/Header";
import FooterComponent from "../../src/components/Footer";
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

  useEffect(() => {
    // fetch all recipes
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/mealplan")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          const daysOfWeek = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ];
          return (
            daysOfWeek.indexOf(a.dayOfWeek) - daysOfWeek.indexOf(b.dayOfWeek)
          );
        });
        setMealPlans(sortedData);
      })
      .catch((error) => console.error(error));
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // find the meal plan with the selected day of week
    const selectedMealPlan = mealPlans.find(
      (mealPlan) => mealPlan.dayOfWeek === formData.dayOfWeek
    );

    // update the meal plan
    fetch(`http://localhost:3001/mealplan/${selectedMealPlan._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedMealPlans = mealPlans.map((mealPlan) =>
          mealPlan._id === data._id ? data : mealPlan
        );
        setMealPlans(updatedMealPlans);
        setFormData({
          dayOfWeek: "",
          recipeId: ["", "", ""],
        });
      })
      .catch((error) => console.log(error));
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
            To get started, click on one of the days and select three meals from
            the drop down menu.
            <br />
            Once you're happy with the selection click add to meal plan. <br />
            Do this for each day you want a meal plan for, then click save to
            return back to your account.
          </p>
        </div>
        <Link href="/account">Save & Exit</Link>
        <div className={styles.mealplanMain}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="dayOfWeek">Select Day of Week:</label>
            <div className={styles.mealplanDays}>
              {mealPlans.map((day) => (
                <Button
                  key={day._id}
                  variant={selectedButton === day.dayOfWeek ? "contained" : "outlined"}
                  onClick={() => handleDayClick(day.dayOfWeek)}
                >
                  {day.dayOfWeek}
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
                Update Meal Plan
              </Button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default MealPlans;