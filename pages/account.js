import styles from "../styles/Account.module.css";
import Link from "next/link";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FavoriteButton } from "../src/components/FavouriteButton";

export const getServerSideProps = withPageAuthRequired();

export default function account() {
  const { user } = useUser();
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/mealplans")
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

  if (user) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <HeaderComponent></HeaderComponent>
        </div>
        <div className={styles.main}>
          <div className={styles.title}>
            <h1>My Account</h1>
            <p>Welcome {user.name}</p>
            <p>
              Here you can see all your favourite recipe and plan out your meals
              for the week using our meal planner section!
            </p>
          </div>
          <FavoriteButton></FavoriteButton>
          <div className={styles.title}>
            <h1>Meal Planner</h1>
            <p>
              Pick out which recipe you want to make for the week, then when
              your finished we will generate a list of all ingredients you need!
            </p>
          </div>
          <div className={styles.content}>
            {/* <div className={styles.list}>
              <h3>List for shopping</h3>
            </div> */}
            <div className={styles.title}>
              <p>Meal Planner</p>
              <div className={styles.description}>
                <Link href="/mealplans">Create New Planner</Link>
              </div>
              <div className={styles.meallist}>
                {mealPlans.map((mealPlan) => (
                  <Card sx={{ maxWidth: 345 }}>
                    <Typography variant="h5" component="div">
                      {mealPlan.dayOfWeek}
                      <Link href={"/mealplans/"+mealPlan._id}>Edit</Link>
                    </Typography>

                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      /> */}
                    {mealPlan.recipeNames.map((name, index) => (
                      <CardActionArea>
                        <Card key={index}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <Link href={'/recipe/'+name}>{name}</Link>
                            </Typography>
                          </CardContent>
                        </Card>
                      </CardActionArea>
                    ))}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
