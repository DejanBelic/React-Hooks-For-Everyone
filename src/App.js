import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import {useTitleInput} from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  console.log('render APP');
  // console.log('ref', ref.current);
  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('mile')}>Level Up Dishes</h1>
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
