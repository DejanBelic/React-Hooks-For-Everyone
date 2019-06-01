import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
  const [name, setName] = useState('');
  console.log('render');

  useEffect(() => {
    document.title = name;
  });
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <h3>{name}</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
        }}>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)} value={name}
      />
      <button>Submit</button>
      </form>
    </div>
  );
};



export default App
