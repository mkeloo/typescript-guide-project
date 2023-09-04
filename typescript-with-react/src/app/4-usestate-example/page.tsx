'use client';
import React, { useState } from 'react';

type UserType = {
  name: string;
  sessionId: number;
};

const UseStateExample = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };

  return (
    <div className="useStateExample">
      {user ? (
        `${user.name} - ${user.sessionId} logged in!`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
      {/* Be Aware */}
      {user?.name === 'admin' && <div>Admin logged in!</div>}
    </div>
  );
};

export default UseStateExample;
