import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;
  return (
    <>

     {isToggled  ? <DishForm setToggle={setToggle} /> : <button onClick={() => setToggle(!isToggled)}/>}
    </>
  )
};

export default Toggle;