import React from 'react';
import Toggle from './Toggle';
import {useTitleInput} from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  console.log('render APP');

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
