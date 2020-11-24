import React from 'react';

function SearchBar({setCurrentPage, search, setSearch}) {
  
  return (
    <form className="searchBar" >
        <input 
          type="text"
          maxLength="15"
          placeholder="Search recipes"
          name={search}
          value={search}
          onChange={(e)=>{setSearch(e.target.value)
                          setCurrentPage(1)}}
        />
    </form>
  );
}

export default SearchBar;