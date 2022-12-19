
import styles from '../styles/Results.module.css'
import Image from 'next/image'
import Link from 'next/link'
import curry from '../images/chickenCurry.png'
import bolognese from '../images/bolognese.png'
import pastabake from '../images/pastabake.png'
import vegLasagne from '../images/veglasagne.png'
import pasta from '../images/pasta.png'
import oats from '../images/overnightOats.png'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';

export default function Results() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.main}>
            <h3>Here's what we found!</h3>
            <div className={styles.grid}>
            <div className={styles.card}>
                <Link href='/recipes/OvernightOats'>
                  <div className={styles.main2}>
                    <Image src={oats}
                      width={300}
                      height={300}
                    />
                    <div className={styles.title}>
                      <h3>Overnight Oats</h3>
                    <div className={styles.description}>
                      <p>Adapt this recipe for easy overnight oats to suit your tastes. You can add dried fruit, seeds and nuts, grated apple or pear, or chopped tropical fruits for the perfect healthy breakfast.</p>
                    </div>
                    </div>
                  </div>
                 </Link>
              </div>
              <div className={styles.card}>
                <Link href='/recipes/ChickenCurry'>
                <div className={styles.main2}>
                    <Image src={curry}
                      width={300}
                      height={300}
                    />  
                    <div className={styles.title}>
                      <h3>Chicken Curry</h3>
                      <div className={styles.description}>
                        <p>This easy staple chicken curry is a fantastic recipe for family dinners. It's made with just a handful of ingredients and is enriched with creamy yogurt</p>
                     </div>
                    </div>
                  </div>
                 </Link>
              </div>
              <div className={styles.card}>
                <Link href='/recipes/SpaghettiBolognese'>
                  <div className={styles.main2}>
                    <Image src={bolognese}
                      width={300}
                      height={300}
                    />
                    <div className={styles.title}>
                      <h3>Spaghetti Bolognese</h3>
                    <div className={styles.description}>
                      <p>You can't beat a simple Spag Bol. Spice it up with some chorizo and chillis if you want a bit more heat.</p>
                    </div>
                    </div>
                  </div>
                 </Link>
              </div>
              <div className={styles.card}>
                <Link href='/recipes/ChickenPastaBake'>
                  <div className={styles.main2}>
                    <Image src={pastabake}
                      width={300}
                      height={300}
                    />
                    <div className={styles.title}>
                      <h3>Chicken Pasta Bake</h3>
                    <div className={styles.description}>
                      <p>Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad</p>
                    </div>
                    </div>
                  </div>
                 </Link>
              </div>
              <div className={styles.card}>
                <Link href='/recpies/VeggieLasagne'>
                  <div className={styles.main2}>
                    <Image src={vegLasagne}
                      width={300}
                      height={300}
                    />
                    <div className={styles.title}>
                      <h3>Vegetarian Lasagne</h3>
                    <div className={styles.description}>
                      <p>Make our easy vegetarian lasagne using just a handful of ingredients. You can use ready-made tomato sauce and white sauce, or batch cook the sauces and freeze them</p>
                    </div>
                    </div>
                  </div>
                 </Link>
              </div>
              <div className={styles.card}>
                <Link href='/recipes/PestoPasta'>
                  <div className={styles.main2}>
                    <Image src={pasta}
                      width={300}
                      height={300}
                    />
                    <div className={styles.title}>
                      <h3>Broccoli pesto & pancetta pasta</h3>
                    <div className={styles.description}>
                      <p>Serve this healthy bowl of pasta topped with cherry tomatoes for a quick and easy midweek meal. It's tossed with broccoli pesto, and takes just 25 minutes to make</p>
                    </div>
                    </div>
                  </div>
                 </Link>
              </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div>   
  )
}
