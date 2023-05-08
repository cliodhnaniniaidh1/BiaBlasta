import styles from "../styles/Account.module.css";
import Link from "next/link";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const getServerSideProps = withPageAuthRequired();

export default function account() {
  const { user } = useUser();
  const [mealPlans, setMealPlans] = useState([]);
  const [favourites, setFavorites] = useState([]);
  const imageURL = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/";

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

  useEffect(() => {
    fetch("http://localhost:3001/favourite")
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/favourite/${favoriteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      setFavorites((favourites) =>
        favourites.filter((favourite) => favourite._id !== favoriteId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return (
      <div className={styles.container}>
        <HeaderComponent></HeaderComponent>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>My Account</h1>
            <p>Welcome {user.name}</p>
            <p>
              Here you can see all your favourite recipe and plan out your meals
              for the week using our meal planner section!
            </p>
          </div>
          <div className={styles.favourite}>
            <h1>My Favourites</h1>
            <div className={styles.grid}>
              {favourites.map((fav) => (
                <div className={styles.card}>
                  <Link href={"/recipe/" + fav.recipeId.id}>
                    <div>
                      <img
                        src={imageURL + fav.recipeId.id + ".jpg"}
                        alt="logo"
                        height={250}
                        width={250}
                      />
                    </div>
                    {fav.recipeId.name}
                  </Link>
                  <FontAwesomeIcon
                    onClick={() => handleRemoveFromFavorites(fav._id)}
                    icon={faTrashCan}
                    style={{ color: "#f4796c" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.title}>
            <h1>Meal Planner</h1>
            <p>
              Pick out which recipe you want to make for the week, then when
              your finished we will display a meal planner for you!
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <Link href="/mealplans">Create New Planner</Link>
              <Link href={"/mealplans/edit"}>Edit</Link>
            </div>
          </div>
          {mealPlans.map((mealPlan) => (
            <div className={styles.mealplan}>
              <p>{mealPlan.dayOfWeek}</p>
              {mealPlan.recipeId.map((name, index) => (
                <div className={styles.list}>
                  <div className={styles.card2}>
                    <Link href={"/recipe/" + name.id}>
                      <img
                        src={imageURL + name.id + ".jpg"}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                      <div>{name.name}</div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
