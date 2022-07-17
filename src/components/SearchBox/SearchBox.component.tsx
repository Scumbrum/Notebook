import React from 'react';
import "./SearchBox.style.css"

function SearchBox() {
  return (
    <div className='searchBox'>  
        <input className='searchBox__input' placeholder='Search'></input>
    </div>
  );
}

export default SearchBox;