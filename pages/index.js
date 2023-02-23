import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';
import p1 from '../images/mixedIngredients.png';
import p2 from '../images/sampleMealA.png';
import p3 from '../images/sampleMealb.png';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Head>
          <title>Bia Blasta</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
      <HeaderComponent></HeaderComponent>
      </div> 
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>Welcome to Bia Blasta</h1>
          <p>Does it always feel like you always have a handful of random ingredients with no particular direction for using them?
            <br />Do you open your fridge and just cant find any inspiration on what to cook?
            <br />Well look no further!
            <br />Bia Blasta will find you recipes that you can make right now with what you have on hand.
            <br />Within minutes you'll be browsing through recipes you can whip up for you or the family.
            <br />Find a recipe you love and want to make again?
            <br />Add the recipe to your favourites tab and come back to make again and again!
            <br />
          </p>
        </div>
        <div className={styles.image}>
            <Image 
              src={p2} 
              alt="Meal A" 
              width={200}
              height={200}
            />
            <Image 
              src={p1} 
              alt="Ingredients" 
              width={300}
              height={400}
            />
            <Image 
              src={p3} 
              alt="Meal B" 
              width={200}
              height={200}
            />
        </div>
        <div className={styles.description}>
          <h4>Here's how it works</h4>
          <p>
            Firstly Bia Blasta needs to know what ingredients you have at home
            <br />Visit the pantry page and add ALL ingredients you have
            <br />Select what you have from a list of categories such as meat, veg, fruit, grains and many more
            <br />Once all ingredients are added on the pantry page Bia Blasta will find you all recipe you can make 
            <br />wheater it's breakfast, lunch, dinner or even a little snack!
            <br />If you find a recipe you like you can add it to your favourites in your account page 
            <br />You can create a meal planner to help organise weekly meals in the account section
          </p>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}