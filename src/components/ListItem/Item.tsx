import React from 'react';
import { useActions } from '../../hooks/useActions';
import { ItemProps } from '../../models/componentsModels';

function Item({content, date, name, isSelected, id}:ItemProps) {
  const {setSelected} = useActions()
  return (
    <div onClick={()=> setSelected(id)} className={'listItem__item ' + (isSelected && "active")}>
      <h2 className='item__title'>{name}</h2>
      <div className='item__description'>
        <time>{date.getHours()}:{date.getMinutes()}</time>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Item;