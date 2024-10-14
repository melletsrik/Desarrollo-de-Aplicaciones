
import React from 'react';
import { useUser } from './Usercontext';

function UserProfile() {
  const { user, setUser } = useUser();

  const handleLogin = () => {
    setUser("usurio nuevo");
  };

  return (
    <div>
      <h1>{`ALO, ${user}!`}</h1>
      <button onClick={handleLogin}>Cambiar {user}}</button>
    </div>
  );
}

export default UserProfile;
