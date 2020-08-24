import React from 'react';
import './App.css';
import { ToolBar } from './components/ToolBar'
import { Dropzone } from './components/Dropzone'

function App() {
  return (
    <div className="App">
      <ToolBar />
      <Dropzone />
    </div>
  );
}

export default App;
