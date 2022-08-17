import React from "react";
import Search from "./Search";

function Header({setSearch, setToggleSort, toggle}) {
  const handleToggle = (e) => {
    const negate = !toggle
    setToggleSort(negate)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch}/>
      <button onClick={handleToggle}>Sort A-Z by Location</button>
    </header>
  );
}

export default Header;
