import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import p2 from "../src/components/meal.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <Image src={p2} alt="Bowl of Ingredients" width={900} height={600} />
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

      {/* <div className={styles.title}>
          <h1>Welcome to Bia Blasta</h1>
          <p>
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
            Find a recipe you love and want to make again?
            <br />
            Add the recipe to your favourites tab and come back to make again
            and again!
            <br />
          </p>
        </div> */}
      {/* <div className={styles.description}>
          <h4>Here's how it works</h4>
          <p>
            Firstly Bia Blasta needs to know what ingredients you have at home
            <br />
            Visit the pantry page and add ALL ingredients you have
            <br />
            Select what you have from a list of categories such as meat, veg,
            fruit, grains and many more
            <br />
            Once all ingredients are added on the pantry page Bia Blasta will
            find you all recipe you can make
            <br />
            wheater it's breakfast, lunch, dinner or even a little snack!
            <br />
            If you find a recipe you like you can add it to your favourites in
            your account page
            <br />
            You can create a meal planner to help organise weekly meals in the
            account section
          </p>
        </div> */}
      <FooterComponent></FooterComponent>
    </div>
  );
}
