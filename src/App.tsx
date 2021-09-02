import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdDesigner from './Components/AdDesigner';
import Votes from './Components/Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Votes />

    </div>
  );
}

export default App;
