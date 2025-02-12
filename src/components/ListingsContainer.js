import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({fetchData, removeItem}) {

  //map through array, create Listing Card for each item
  const itemArr = fetchData.map((item)=>{
    return <ListingCard key={item.id} item={item} removeItem={removeItem} />
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
