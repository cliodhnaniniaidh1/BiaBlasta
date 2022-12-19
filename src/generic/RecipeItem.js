import styles from '../../styles/Home.module.css'
import {Router, useRouter} from 'next/router'

function RecipeItem(props){
    const router = useRouter();

    function showDetailHandler(){
        Router.push('/' + props.id)
    }

    return(
        <li className={styles.item}>
            <div className={styles.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={styles.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={styles.actions}>
                <button onClick={showDetailHandler}>Show Details</button>
            </div>
        </li>
    ) 
}

export default RecipeItem