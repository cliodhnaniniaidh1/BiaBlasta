import React, { useState, useEffect } from "react";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/favorites")
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.log(error));
  }, []);

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      const response = await fetch(`http://localhost:3001/favorites/${favoriteId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      setFavorites((favorites) =>
        favorites.filter((favorite) => favorite._id !== favoriteId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Recipe App</h1>
      {favorites.map((fav) => (
        <div>
          <p>{fav.recipeName}</p>
          <button onClick={() => handleRemoveFromFavorites(fav._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
