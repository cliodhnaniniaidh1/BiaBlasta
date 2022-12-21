import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/bolognese.png'
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
                <h3>Spaghetti Bolognese</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                2 tbsp Sun Dried Tomato Paste<br />1 small Carrot chopped<br />2 tins Chopped Tomatoes 400g each <br />1 bunch Fresh Basil chopped <br />2 sprigs Fresh Rosemary finely chopped <br />2 cloves Garlic crushed<br />
                1 tbsp Olive Oil<br />1 small Onion chopped<br />25 g Parmesan Cheese Shavings shaved<br />500 g Quality Irish Round Steak Mince <br />6 - Smoked Bacon Rashers <br />400 g Spaghetti
                </p>
            </div>
            <div className={styles.description}>
              <p>You can't beat a simple Spag Bol. Spice it up with some chorizo and chillis if you want a bit more heat.</p>
                <div className={styles.steps}>
                  <h3>Directions</h3>
                  <h4>Step 1</h4>
                  <p>
                    Heat oil in frying pan and add carrot, onion and cook for 5 mins to soften.
                 </p>
                  <h4>Step 2</h4>
                  <p>
                    Add streaky bacon and garlic and toss in pan for 3 mins. Add in minced meat to the pan and cook for 5 mins or until all meat is cooked.
                  </p>
                  <h4>Step 3</h4>
                  <p>
                   Pour the tomatoes, tomato paste, chopped rosemary and basil into mixture and simmer for 15 mins. Cook spaghetti according to pack instructions with a splash of olive oil and a pinch of salt.
                  </p>
                  <h4>Step 4</h4>
                  <p>
                    Reserve some of the cooking water, drain and pour the pasta into the pan along with the sauce. Toss together, thinning with pasta water, if needed, and serve with the extra basil leaves with Parmesan shavings on top.
                  </p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}