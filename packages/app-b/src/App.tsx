import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'antd/es/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Learn React</Button>
      </header>
    </div>
  );
}

export default App;
