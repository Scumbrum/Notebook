import React from 'react';
import Item from './Item';
import "./ListItem.style.css"

function ListItem() {
  return (
    <ul className='listItem'>
      <li>
        <Item />
      </li>
      <li>
        <Item />
      </li>
      <li>
        <Item />
      </li>
    </ul>
  );
}

export default ListItem;