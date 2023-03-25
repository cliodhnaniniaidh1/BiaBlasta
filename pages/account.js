import Head from "next/head";
import styles from "../styles/Account.module.css";
import Link from "next/link";
import Image from "next/image";
import oats from "../images/overnightOats.png";
import curry from "../images/chickenCurry.png";
import pasta from "../images/pasta.png";
import spag from "../images/bolognese.png";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'

export const getServerSideProps = withPageAuthRequired()

export default function account() {
  const {user} = useUser();
  if(user){
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Head>
            <title>Bia Blasta</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
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
          <div className={styles.title}>
            <h1>Meal Planner</h1>
            <p>
              Pick out which recipe you want to make for the week, then when
              your finished we will generate a list of all ingredients you need!
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.list}>
              <h3>List for shopping</h3>
              <input type="checkbox" />
              Porridge Oats
              <input type="checkbox" />
              Milk
              <input type="checkbox" />
              Chicken
              <input type="checkbox" />
              Rice
              <input type="checkbox" />
              Honey
              <input type="checkbox" />
              Pasta
              <input type="checkbox" />
              Curry sauce
              <input type="checkbox" />
              Peppers
              <input type="checkbox" />
              Onions
              <input type="checkbox" />
              Mince Meat
            </div>
            <div className={styles.description}>
              <div className={styles.table}>
                <h2>Monday</h2>
                <div className={styles.text}>
                  <h4>Breakfast</h4>
                  <Link href="/recipes/OvernightOats">
                    <Image src={oats} height={200} width={200} />
                    <p>Overnight Oats</p>
                  </Link>
                </div>
                <div className={styles.text}>
                  <h4>Lunch</h4>
                  <p>N/A</p>
                </div>
                <div className={styles.text}>
                  <h4>Dinner</h4>
                  <Link href="/recipes/ChickenCurry">
                    <Image src={curry} height={200} width={200} />
                    <p>Chicken Curry</p>
                  </Link>
                </div>
                <div className={styles.text}>
                  <h4>Snacks</h4>
                  <p>N/A</p>
                </div>
              </div>
              <div className={styles.table}>
                <h2>Tuesday</h2>
                <div className={styles.text}>
                  <h4>Breakfast</h4>
                  <Link href="/recipes/OvernightOats">
                    <Image src={oats} height={200} width={200} />
                    <p>Overnight Oats</p>
                  </Link>
                </div>
                <div className={styles.text}>
                  <h4>Lunch</h4>
                  <Link href="/recipes/PestoPasta">
                    <Image src={pasta} height={200} width={200} />
                    <p>Pesto Pasta</p>
                  </Link>
                </div>
                <div className={styles.text}>
                  <h4>Dinner</h4>
                  <Link href="/recipes/SpaghettiBolognese">
                    <Image src={spag} height={200} width={200} />
                    <p>Spaghetti Bolognese</p>
                  </Link>
                </div>
                <div className={styles.text}>
                  <h4>Snacks</h4>
                  <p>N/A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}
