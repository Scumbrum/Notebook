import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import "./SearchBox.style.css"

function SearchBox() {
  const {searchQuery} = useTypedSelector(state=> state.noteReducer)
  const {setSearch} = useActions()
  return (
    <div className='searchBox'>  
        <input
          className='searchBox__input'
          placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
          value = {searchQuery}/>
    </div>
  );
}

export default SearchBox;