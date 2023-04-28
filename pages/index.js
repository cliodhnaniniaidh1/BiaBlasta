import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import Link from "next/link";

export default function Home() {
  const imageURL = "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/meal.png";
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.header}>
        <Head>
          <title>Bia Blasta</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={imageURL} alt="Bowl of Ingredients" width={900} height={600} />
        </div>

        <div className={styles.contentRight}>
          <div className={styles.textContainer}>
            <p>Delicious</p>
            <p>Food</p>
            <p>Awaits</p>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Link href="/pantry">Let's Get Cooking!</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.title}>Welcome to Bia Blasta</p>
            <p className={styles.description}>
              Does it always feel like you always have a handful of random
              ingredients with no particular direction for using them?
              <br />
              Do you open your fridge and just cant find any inspiration on what
              to cook?
              <br />
              Well look no further!
              <br />
              Bia Blasta will find you recipes that you can make right now with
              what you have on hand.
              <br />
              Within minutes you'll be browsing through recipes you can whip up
              for you or the family.
              <br />
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.title}>How it works</p>
            <p className={styles.description}>
              It's pretty simple, with just 3 easy steps.
              <br />
              1.) Visit the recipe page.
              <br />
              2.) Select all ingredients you have from the categories list.
              <br />
              3.) Pick a recipe and start cooking!
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.title}>Addition Features</p>
            <p className={styles.description}>
              Create an account to gain access to these features
              <br />
            </p>
            <li className={styles.description}>
              Create meal plans with all the recipes we have to offer.
            </li>
            <li className={styles.description}>
              Like the look of a recipe? Add it to your favourites and come back
              to try it again and again.
            </li>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
