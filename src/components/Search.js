import React, { useState } from "react";

function Search({setSearch}) {
  //useState for controlled form
  const [string, setString] = useState("")

  //submission alters useState in parent component
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(string)
  }

  //controls useState input
  const handleString = (e) => {
    console.log(e.target.value)
    setString(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={string}
        onChange={handleString}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
