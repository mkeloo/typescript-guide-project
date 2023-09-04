import React from 'react';

type ShapeType = 'cube' | 'square' | 'circle' | 'triangle' | 'rectangle';
type TwoDShapeType = Exclude<ShapeType, 'cube'>;

type ThemeType = 'dark' | 'light';
type ColorType = 'red' | 'blue' | 'yellow';

type ItemProps = {
  //   color: `${ThemeType}-${ColorType}`;
  color: Exclude<`${ThemeType}-${ColorType}`, 'dark-yellow'>;
};

const Shape = (props: ItemProps) => {
  const shape: ShapeType = 'cube';
  const twoDShape: TwoDShapeType = 'circle';

  return (
    <div>
      <h1>Shape</h1>
    </div>
  );
};

export default Shape;
