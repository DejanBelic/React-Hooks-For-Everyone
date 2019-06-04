import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;
  return (
    <>
    <button onClick={() => setToggle(!isToggled)}/>
     {isToggled && <DishForm/>}
    </>
  )
};

export default Toggle;