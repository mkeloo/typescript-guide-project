import React from 'react';
import Item from './Item';

const ItemList = () => {
  return (
    <div>
      <h1>ItemList</h1>
      <Item id={1} title="Post Title" extra={[{ id: 1, username: 'John' }]} />
    </div>
  );
};

export default ItemList;
