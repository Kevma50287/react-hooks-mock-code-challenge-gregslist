import React, { useState } from "react";

function Search({setSearch}) {
  const [string, setString] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(string)
  }

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
