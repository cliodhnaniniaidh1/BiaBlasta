import {useRef} from 'react';
import styles from '../styles/Pantry.module.css'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';
import Link from 'next/link'

export default function Home() {

  const ref = useRef(null)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <HeaderComponent></HeaderComponent>
      </div> 
      <div className={styles.main}>
        <div className={styles.title}>
          <h2>The Pantry</h2>
          <p>Select all the ingredients you have and we'll find some recipes for you to make!</p>
        </div>
        <div className={styles.grid}>
          <a className={styles.card}>
            <div className={styles.subTitle}>
              <h4>Meat</h4>
              <div className={styles.description}>
                <label htmlFor="Meat">
                    <input ref={ref} type="checkbox" id="meat" name="meat" />Chicken<br />
                    <input ref={ref} type="checkbox" id="meat" name="meat" />Beef<br />
                    <input ref={ref} type="checkbox" id="meat" name="meat" />Turkey<br />
                    <input ref={ref} type="checkbox" id="meat" name="meat" />Pork<br />
                    <input ref={ref} type="checkbox" id="meat" name="meat" />Sausage<br />
                </label>
              </div>
            </div>
          </a>
          <a className={styles.card}>
            <div className={styles.subTitle}>
              <h4>Vegetables</h4>
              <div className={styles.description}>
                <label htmlFor="Vegetables">
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Mushroom<br />
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Peppers<br />
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Onion<br />
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Carrots<br />
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Cabbage<br />
                    <input ref={ref} type="checkbox" id="veg" name="veg" />Tomatoes<br />
                </label>
              </div>
            </div>
          </a>
        <a className={styles.card}>
          <div className={styles.subTitle}>
          <h4>Grains</h4>
          <div className={styles.description}>
            <label htmlFor="Grains">
                <input ref={ref} type="checkbox" id="grain" name="grain" />rice<br />
                <input ref={ref} type="checkbox" id="grain" name="grain" />pasta<br />
                <input ref={ref} type="checkbox" id="grain" name="grain" />noodles<br />
                <input ref={ref} type="checkbox" id="grain" name="grain" />couscous<br />
            </label>
          </div>
        </div>
        </a>
        <a className={styles.card}>
          <div className={styles.subTitle}>
            <h4>Canned Goods</h4>
            <div className={styles.description}>
              <label htmlFor="Canned">
                  <input ref={ref} type="checkbox" id="canned" name="canned" />Tinned Tomatoes<br />
                  <input ref={ref} type="checkbox" id="canned" name="canned" />Coconut milk<br />
              </label>
            </div>
           </div>
        </a>
        </div> 
        <div className={styles.button}>
        <Link href='/results'>
          <p>Click Here</p>
          </Link>
        </div>   
      </div>

      <FooterComponent></FooterComponent>
    </div>   
  )
}