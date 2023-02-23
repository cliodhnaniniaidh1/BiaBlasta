import styles from '../../styles/Recipe.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HeaderComponent from '../../src/components/Header';
import FooterComponent from '../../src/components/Footer';

//[id] has to be the same name as what you want to find in the database
//e.g if looking for name, file name has to be called [name].js

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/recipe");
  const data = await res.json();

  const paths = data.map((recipe) => ({
    params: { _id: recipe._id.toString() },
  }))

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  const name = context.params._id
  const res = await fetch("http://localhost:3001/recipe/" + name)
  const data = await res.json()
  return {
    props: { recipe:data }
  }
}

const Details = ({ recipe }) => {

  console.log(recipe.ingredients)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.main}>
            <div className={styles.title}>
              <h3>{recipe.name}</h3>
            </div>
            <div className={styles.content}>
            <div className={styles.ingredients}>
              <h3>Ingredients List</h3>
              <div>{recipe.ingredients.map((ingredients) =>{return(<p>{ingredients}</p>)})}</div>
            </div>
            <div className={styles.description}>
              <p>{recipe.description}</p>
              <p>{recipe.catagory}</p>
              <p>{recipe.servingSize}</p>
              <div className={styles.steps}>
                <div>{recipe.steps.map((steps) =>{return(<p>{steps}</p>)})}</div>
              </div>
            </div>
            </div>
          </div>
        <FooterComponent></FooterComponent>
      </div>
  );
};

export default Details;
