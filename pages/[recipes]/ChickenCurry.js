import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/chickenCurry.png'
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
                <h3>Chicken Curry</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                  2 tbsp sunflower oil<br />1 onion, thinly sliced<br />2 garlic cloves, crushed <br />thumb-sized piece of ginger, grated <br />6 chicken thighs, boneless and skinless <br />3 tbsp medium spice paste (tikka works well)<br />
                  400g can chopped tomatoes<br />100g Greek yogurt<br />1 small bunch of coriander, leaves chopped<br />naan breads or cooked basmati rice, to serve
                </p>
            </div>
            <div className={styles.description}>
              <p>This easy staple chicken curry is a fantastic recipe for family dinners. It's made with just a handful of ingredients and is enriched with creamy yogurt</p>
                <div className={styles.steps}>
                  <h3>Directions</h3>
                  <h4>Step 1</h4>
                  <p>
                      Heat the oil in a flameproof casserole dish or large frying pan over a medium heat. Add the onion and a generous pinch of salt and fry for 8-10 mins, or until the onion has turned golden brown and sticky. Add the garlic and ginger, cooking for a further minute.
                  </p>
                  <h4>Step 2</h4>
                  <p>Chop the chicken into chunky 3cm pieces, add to the pan and fry for 5 mins before stirring through the spice paste and tomatoes, along with 250ml water. Bring to the boil, lower to a simmer and cook on a gentle heat uncovered for 25-30 mins or until rich and slightly reduced. Stir though the yogurt, coriander and ground almonds, season and serve with warm naan or fluffy basmati rice.</p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}