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

// import React, { Component } from "react";
//
// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };
//
//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }