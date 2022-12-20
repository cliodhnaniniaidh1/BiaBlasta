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
                    <input ref={ref} type="checkbox"  />Chicken<br />
                    <input ref={ref} type="checkbox"  />Beef<br />
                    <input ref={ref} type="checkbox"  />Turkey<br />
                    <input ref={ref} type="checkbox"  />Pork<br />
                    <input ref={ref} type="checkbox"  />Sausage<br />
                </label>
              </div>
            </div>
          </a>
          <a className={styles.card}>
            <div className={styles.subTitle}>
              <h4>Vegetables</h4>
              <div className={styles.description}>
                <label htmlFor="Vegetables">
                    <input ref={ref} type="checkbox"/>Mushroom<br />
                    <input ref={ref} type="checkbox"/>Peppers<br />
                    <input ref={ref} type="checkbox" />Onion<br />
                    <input ref={ref} type="checkbox"/>Carrots<br />
                    <input ref={ref} type="checkbox" />Cabbage<br />
                    <input ref={ref} type="checkbox" />Tomatoes<br />
                </label>
              </div>
            </div>
          </a>
        <a className={styles.card}>
          <div className={styles.subTitle}>
          <h4>Grains</h4>
          <div className={styles.description}>
            <label htmlFor="Grains">
                <input ref={ref} type="checkbox" />rice<br />
                <input ref={ref} type="checkbox" />pasta<br />
                <input ref={ref} type="checkbox" />noodles<br />
                <input ref={ref} type="checkbox"  />couscous<br />
            </label>
          </div>
        </div>
        </a>
        <a className={styles.card}>
          <div className={styles.subTitle}>
            <h4>Canned Goods</h4>
            <div className={styles.description}>
              <label htmlFor="Canned">
                  <input ref={ref} type="checkbox" />Tinned Tomatoes<br />
                  <input ref={ref} type="checkbox" />Coconut milk<br />
              </label>
            </div>
           </div>
        </a>
        </div> 
        <div className={styles.button}>
        <Link href='/results'>
          <p>Next Page</p>
          </Link>
        </div>   
      </div>

      <FooterComponent></FooterComponent>
    </div>   
  )
}