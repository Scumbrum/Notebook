import React from 'react';

function Item() {
  return (
    <div className='listItem__item active'>
      <h2 className='item__title'>Новая заметка</h2>
      <div className='item__description'>
        <time>17:02</time>
        <p>No additional text</p>
      </div>
    </div>
  );
}

export default Item;