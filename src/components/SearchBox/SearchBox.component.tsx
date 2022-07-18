import React, { useDeferredValue, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import "./SearchBox.style.css"

function SearchBox() {
  const [currentQuery, setCurrentQuery] = useState<string>('')
  const defferedQuery = useDeferredValue(currentQuery)
  const {setSearch} = useActions()
  useEffect(() => {
    setSearch(defferedQuery)
  },[defferedQuery, setSearch])
  return (
    <div className='searchBox'>  
        <input
          className='searchBox__input'
          placeholder='Search'
          onChange={(e) => setCurrentQuery(e.target.value)}
          value = {currentQuery}/>
    </div>
  );
}

export default SearchBox;