import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/veglasagne.png'
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
                <h3>Vegitarian Lasagne</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                3 red peppers, cut into large chunks<br />
                2 aubergines, cut into ½ cm thick slices<br />
                8 tbsp olive oil, plus extra for the dish<br />
                300g lasagne sheets<br />
                125g mozzarella<br />
                handful cherry tomatoes, halved<br />
                </p>
                <h4>
                For the tomato sauce<br />
                </h4>
                <p>
                1 tbsp olive oil<br />
                2 onions, finely chopped<br />
                2 garlic cloves, sliced<br />
                1 carrot, roughly chopped<br />
                2 tbsp tomato purée<br />
                200ml white wine<br />
                3 x 400g cans chopped tomatoes<br />
                1 bunch of basil, leaves picked<br />
                </p>
                <h4>
                For the white sauce<br />
                </h4>
                <p>
                85g butter<br />
                85g plain flour<br />
                750ml milk<br />
                </p>
            </div>
            <div className={styles.description}>
              <p>Make our easy vegetarian lasagne using just a handful of ingredients. You can use ready-made tomato sauce and white sauce, or batch cook the sauces and freeze them</p>
                <div className={styles.steps}>
                    <h3>Directions</h3>
                    <h4>Step 1</h4>
                    <p>
                    To make the tomato sauce, heat the olive oil in a saucepan. Add the onions, garlic and carrot. Cook for 5-7 mins over a medium heat until softened. Turn up the heat a little and stir in the tomato purée. Cook for 1 min, pour in the white wine, then cook for 5 mins until this has reduced by two-thirds. Pour over the chopped tomatoes and add the basil leaves. Bring to the boil then simmer for 20 mins. Leave to cool then whizz in a food processor. Will keep, cooled, in the fridge for up to three days or frozen for three months.                 </p>
                    <h4>Step 2</h4>
                    <p>
                    To make the white sauce, melt the butter in a saucepan, stir in the plain flour, then cook for 2 mins. Slowly whisk in the milk, then bring to the boil, stirring. Turn down the heat, then cook until the sauce starts to thicken and coats the back of a wooden spoon. Will keep, cooled, in the fridge for up to three days or frozen for three months.                  </p>
                    <h4>Step 3</h4>
                    <p>
                    Heat the oven to 200C/180C fan/gas 6. Lightly oil two large baking trays and add the peppers and aubergines. Toss with the olive oil, season well, then roast for 25 mins until lightly browned.                  
                    </p>
                    <h4>Step 4</h4>
                    <p>
                    Reduce the oven to 180C/160C fan/gas 4. Lightly oil a 30 x 20cm ovenproof dish. Arrange a layer of the vegetables on the bottom, then pour over a third of the tomato sauce. Top with a layer of lasagne sheets, then drizzle over a quarter of the white sauce. Repeat until you have three layers of pasta.
                    </p>
                    <h4>Step 5</h4>
                    <p>
                    Spoon the remaining white sauce over the pasta, making sure the whole surface is covered, then scatter over the mozzarella and cherry tomatoes. Bake for 45 mins until bubbling and golden.
                    </p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}