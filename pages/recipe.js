import styles from '../styles/Recipe.module.css'
import Image from 'next/image'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';

export default function Results() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.title}>
            <h3>Sample Recipe A</h3>
        </div>
        <div className={styles.main}>
            <div className={styles.ingredients}>
                <p>***Image of Food***</p>
                <p>Ingredients List</p>
                <p>Lorem ipsum dolor sit <br />amet consectetur,<br /> adipisicing elit. <br />Vitae laboriosam <br />provident obcaecati <br />rerum autem, quam doloribus 
                </p>
            </div>
            <div className={styles.description}>
              {/* Find fix for long sentences, so it doesnt mess with layout of page */}
                <p>Directions</p>
                <p>1)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laboriosam provident obcaecati rerum autem, quam doloribus  </p>
                <p>2)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laboriosam provident obcaecati rerum autem, quam doloribus </p>

            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}