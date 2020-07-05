import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo cor="azul"> Meu primeiro componente tem um children de cor </Titulo> 
    </div>
  );
}

export default App;
