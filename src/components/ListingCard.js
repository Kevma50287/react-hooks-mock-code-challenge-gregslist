import React, { useState } from "react";
import { url } from "./App";

function ListingCard({item, removeItem}) {
  const [favorited, setFavorited] = useState(false)

  const {id, description, location, image} = item

  const handleFavorite = () => {
    const negate = !favorited
    setFavorited(negate)
  }

  const handleDelete = (e) => {
    fetch(`${url}/${id}`, {
      method:'DELETE'
    }).then(r=>r.json())
    .then(()=>removeItem(id))
    .catch(err=>console.log(err))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image ? image : "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
