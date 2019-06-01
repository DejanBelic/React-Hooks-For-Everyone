import React, { useState } from 'react';
import Toggle from './Toggle';

const App = () => {
  const [name, setName] = useState('');
  console.log('render');
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <h3>{name}</h3>
      <input onChange={(event) => setName(event.target.value)} value={name} />
    </div>
  );
};

export default App
