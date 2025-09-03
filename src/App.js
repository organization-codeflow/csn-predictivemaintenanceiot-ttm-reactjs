import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chào mừng đến với React!</h1>
        <p>Đây là dự án ReactJS đơn giản nhất</p>
        <button onClick={() => alert('Hello React!')}>
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;
