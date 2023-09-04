'use client';
import React, { useEffect, useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    console.log('Username is ' + usernameRef.current?.value);
  };

  return (
    <div className="useRefExample">
      <div className="useRefExample">
        <input ref={inputRef} type="text" placeholder="focus here" />
        <input ref={usernameRef} type="text" placeholder="username" />
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

export default UseRefExample;
