import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/overnightOats.png'
import HeaderComponent from '../../src/components/Header';
import FooterComponent from '../../src/components/Footer';


export default function Recipes() {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>Overnight Oats</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                ¼ tsp ground cinnamon<br />
                50g rolled porridge oats<br />
                2 tbsp natural yogurt<br />
                50g mixed berries<br />
                drizzle of honey<br />
                ½ tbsp nut butter<br />
                </p>
            </div>
            <div className={styles.description}>
              <p>Adapt this recipe for easy overnight oats to suit your tastes. You can add dried fruit, seeds and nuts, grated apple or pear, or chopped tropical fruits for the perfect healthy breakfast.</p>
                <div className={styles.steps}>
                    <h3>Directions</h3>
                    <h4>Step 1</h4>
                    <p>
                    The night before serving, stir the cinnamon and 100ml water (or milk) into your oats with a pinch of salt.
                    </p>
                    <h4>Step 2</h4>
                    <p>
                    The next day, loosen with a little more water (or milk) if needed. Top with the yogurt, berries, a drizzle of honey and the nut butter.
                    </p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}