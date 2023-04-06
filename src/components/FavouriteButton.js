import React from 'react';

const FavoriteButton = ({ onClick, isFavorite }) => (
  <button onClick={onClick}>
    {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
  </button>
);

export default FavoriteButton;
