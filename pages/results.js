import styles from "../styles/Results.module.css";
import Image from "next/image";
import Link from "next/link";
import HeaderComponent from "../src/components/Header";
import FooterComponent from "../src/components/Footer";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/recipe');
  const data = await res.json();

  return {
    props: {
      recipes: data
    }
  }
}

export default function Results({ recipes }) {
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h3>Here's what we found!</h3>
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <div className={styles.card}>
              <Link href={"/recipe/" + recipe._id} key={recipe._id}>
                <p>***image***</p>
                <h3>{recipe.name}</h3>
                <p>{recipe.catagory}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
