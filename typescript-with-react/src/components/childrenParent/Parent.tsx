import React from 'react';

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is the Parent</h1>
      {children}
    </div>
  );
};

export default Parent;
