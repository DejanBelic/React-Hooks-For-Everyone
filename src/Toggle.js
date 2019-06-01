import React, { useState, useContext } from 'react';
import { UserContext } from './App';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;
  return (
    <>
    <button onClick={() => setToggle(!isToggled)}/>
     {isToggled && <h2>Toggle</h2>}
    </>
  )
};

export default Toggle;