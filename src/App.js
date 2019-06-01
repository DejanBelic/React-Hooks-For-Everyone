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
      <form
        onSubmit={event => {
          event.preventDefault();
          formSubmit(name, setName);
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

const formSubmit = (value, setValue) => {
  console.log(`Form submitted! ${value}`);
  setValue('');
};

export default App
