import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/pastabake.png'
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
                <h3>Chicken Pasta Bake</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                4 tbsp olive oil<br />
                1 onion, finely chopped<br />
                2 garlic cloves, crushed<br />
                ¼ tsp chilli flakes<br />
                2 x 400g cans chopped tomatoes<br />
                1 tsp caster sugar<br />
                6 tbsp mascarpone<br />
                4 skinless chicken breasts, sliced into strips<br />
                300g penne<br />
                70g mature cheddar, grated<br />
                50g grated mozzarella<br />
                ½ small bunch of parsley, finely chopped<br />
            </p>
            </div>
            <div className={styles.description}>
              <p>Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad</p>
                <div className={styles.steps}>
                  <h3>Directions</h3>
                  <h4>Step 1</h4>
                  <p>
                    Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone.
                 </p>
                  <h4>Step 2</h4>
                  <p>
                    Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.
                  </p>
                  <h4>Step 3</h4>
                  <p>
                    Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.                  
                  </p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}