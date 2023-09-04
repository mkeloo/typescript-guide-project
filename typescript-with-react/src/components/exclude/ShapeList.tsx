import React from 'react';
import Shape from './Shape';

const ShapeList = () => {
  return (
    <div>
      <h1>ShapeList</h1>
      <Shape color="dark-blue" />
      <Shape color="dark-red" />
      <Shape color="light-yellow" />
    </div>
  );
};

export default ShapeList;
