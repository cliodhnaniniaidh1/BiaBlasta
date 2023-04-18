import styles from "../styles/Account.module.css";
import Link from "next/link";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import * as React from "react";
import { CardActionArea, CardContent, Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import logo from "../src/components/logo.png";
import Image from "next/image";

export const getServerSideProps = withPageAuthRequired();

export default function account() {
  const { user } = useUser();
  const [mealPlans, setMealPlans] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mealplans?sort=-createdAt&limit=7")
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

  // useEffect(() => {
  //   fetch("http://localhost:3001/mealplans")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const sortedData = data.sort((a, b) => {
  //         const daysOfWeek = [
  //           "Monday",
  //           "Tuesday",
  //           "Wednesday",
  //           "Thursday",
  //           "Friday",
  //           "Saturday",
  //           "Sunday",
  //         ];
  //         return (
  //           daysOfWeek.indexOf(a.dayOfWeek) - daysOfWeek.indexOf(b.dayOfWeek)
  //         );
  //       });
  //       setMealPlans(sortedData);
  //       console.log(data)
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/favorites")
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/favorites/${favoriteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      setFavorites((favorites) =>
        favorites.filter((favorite) => favorite._id !== favoriteId)
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
              {favorites.map((fav) => (
                <div className={styles.card}>
                  <Link href={"/recipe/" + fav.recipeId.id}>
                    {fav.recipeId.name}
                    <p>***image***</p>
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
            <Card className={styles.mealplan}>
              <p>{mealPlan.dayOfWeek}</p>
              {mealPlan.recipeId.map((name, index) => (
                <div className={styles.list}>
                  <CardActionArea>
                    <Card key={index}>
                      {/* <Image height={100} width={100} src='https://biablastaimage.s3.eu-west-1.amazonaws.com/food/Screenshot+2023-04-12+at+10.15.12.png' alt="logo" /> */}
                      <CardContent>
                        <p>
                          <Link href={"/recipe/" + name.id}>{name.name}</Link>
                        </p>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </div>
              ))}
            </Card>
          ))}
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
