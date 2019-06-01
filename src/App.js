import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import {useTitleInput} from './hooks/useTitleInput';

const reverseWord = word => {
  console.log('function called')
  return word
    .split('')
    .reverse()
    .join('')
};



export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const title = name;
  const titleReversed = useMemo(() => reverseWord(title), [title]);
  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
    <div className="main-wrapper" ref={ref}>

      <h1 onClick={() => ref.current.classList.add('mile')}>Level Up Dishes</h1>
      {titleReversed}
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
    </UserContext.Provider>
  );
};




export default App
