"use strict";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

function FavouriteButton(props) {
  console.log(props)
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('user')
    if(loggedInUser){
        setUser(JSON.parse(loggedInUser))
    }
  }, [])

  console.log("This is the user saved in local storage:", user)

  //if user not in local storage, asked to log in instead
  if(user == null){
    return(
        <p className={styles.description}>
            <span>
                <a href='/login'>Log in to favourite this recipe</a>
            </span>
        </p>
    )
  }
  return <FindInitialState userId={user.user_id} recipeId={props.recipeId}/>
}

function FindInitialState(props){
    let favBool;

    const fetcher = url => fetch(url).then(r => r.json())
    const {data, error} = useSWR(`/api/users/${props.userId}/recipes/${props.recipeId}`, fetcher)
    console.log("This user has this recipe favouritd", data)
    if(error)
        return <div>failed to load</div>
    if(data===undefined)
        return <div>loading...</div>

    favBool = data

    return <SetStateAndToggle favBool={favBool} userId={props.userId} recipeId={props.recipeId}/>
}

function SetStateAndToggle(props) {
    const currentlyAFavorite = <FontAwesomeIcon icon={faHeart} />
    const notCurrentlyAFavorite = <FontAwesomeIcon icon={faHeartBroken}/>

    const [favorite, setFavorite] = useState(props.favBool);

    const toggleFavorite = (recipeId) => {
        setFavorite((favorite) => {
          if (favorite == true) {
            console.log("I clicked unfavorite")
            console.log(props)
            fetch(`/api/users/${props.userId}/recipes/${recipeId}/remove`, { method: 'POST' })
            .then(console.log("This was a favorited recipe, but now it isnt!"));

          }
          if (favorite == false) {
            console.log("I clicked favorite")
            fetch(`/api/users/${props.userId}/recipes/${recipeId}/add`, { method: 'POST' })
            .then(console.log("This was not a favorited recipe. Now it is!"));
          }

          return !favorite;
        });
    }

    return (
        <button
            className={styles['favorite-button']}
            onClick={() => toggleFavorite(props.recipeId)}
            key={props.recipeId}>
        { favorite === true ? currentlyAFavorite : notCurrentlyAFavorite} 
        </button>
    );
}

export {FavouriteButton};
