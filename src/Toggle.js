import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <>
    <button onClick={() => setToggle(!isToggled)}/>
     {isToggled && <h2>Toggle</h2>}
    </>
  )
};

export default Toggle;