import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import pic from '../../images/pasta.png'
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
                <h3>Broccoli pesto & pancetta pasta</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
                <Image src= {pic} />
                <h3>Ingredients List</h3>
                <p>
                    300g head broccoli, broken into florets<br/>
                    300g pasta <br/>
                    1 tbsp pine nuts<br/>
                    1 large bunch of basil<br/>
                    1 large garlic clove<br/>
                    2 tbsp parmesan, finely grated<br/>
                    1 tbsp olive oil<br/>
                    50g smoked pancetta, diced<br/>
                    200g cherry tomatoes, halved<br/>
                </p>
            </div>
            <div className={styles.description}>
              <p>Serve this healthy bowl of pasta topped with cherry tomatoes for a quick and easy midweek meal. It's tossed with broccoli pesto, and takes just 25 minutes to make</p>
                <div className={styles.steps}>
                  <h3>Directions</h3>
                  <h4>Step 1</h4>
                  <p>
                     Bring a pan of lightly salted water to the boil. Add the broccoli and boil for 5 mins. Scoop out with a slotted spoon and set aside.
                  </p>                  
                  <h4>Step 2</h4>
                  <p>
                    Put the pasta in the same pan and cook following pack instructions. Meanwhile, tip the broccoli into a food processor with the pine nuts, basil, garlic, parmesan and oil, and blitz until smooth. Season with black pepper and a little salt (the pancetta is very salty).
                  </p>
                  <h4>Step 3</h4>
                  <p>
                  Set a frying pan over a medium heat and cook the pancetta for 2 mins. Add the tomatoes and cook for 3 mins, or until softened. Toss the pasta with the broccoli pesto, tomatoes and pancetta, and loosen with a splash of pasta water, if needed. Spoon into bowls and serve.
                  </p>
                </div>
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div> 
  )
}