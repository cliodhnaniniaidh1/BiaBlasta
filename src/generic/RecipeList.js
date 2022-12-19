import RecipeItem from './RecipeItem'
import styles from '../../styles/Home.module.css'

function RecipeList(props){
    return (
        <ul className={styles.list}>
          {props.recipes.map((recipe) => (
            <RecipeItem
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
            />
          ))}
        </ul>
      );
}

export default RecipeList