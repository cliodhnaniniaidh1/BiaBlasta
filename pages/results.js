
import styles from '../styles/Results.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HeaderComponent from '../src/components/Header';
import FooterComponent from '../src/components/Footer';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3001/recipe')
  const data = await res.json()

  return{
    props: {recipes:data}
  }
}

export default function Results({recipes}) {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <HeaderComponent></HeaderComponent>
      </div> 
        <div className={styles.main}>
            <h3>Here's what we found!</h3>
            <div className={styles.grid}>
            <div>
                {recipes.map(recipe => (
                <Link href={'/recipe/'+recipe._id} key={recipe._id}>
                    <div className={styles.card}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
      <FooterComponent></FooterComponent>
    </div>   
  )
}