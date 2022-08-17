import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({fetchData, removeItem}) {

  const itemArr = fetchData.map((item)=>{
    return <ListingCard item={item} removeItem={removeItem} />
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {itemArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
