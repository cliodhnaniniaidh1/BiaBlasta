import styles from '../../styles/Results.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3001/recipe')
    const data = await res.json()
  
    return{
      props: {recipes:data}
    }
}

const Recipes = ({recipes}) => {
return(
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

)
}
export default Recipes