import React from 'react';
import Rectangle from "./components/Rectangle"
import Block from "./components/Block"
import './App.css';

function App() {

    const box= {
        color:"lime"
    };


  return (
    <div className="App">
      <Rectangle/>
      <Rectangle/>
      <Rectangle/>

<Block></Block>



    </div>
  );
}

export default App;
