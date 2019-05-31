import React from 'react';
import logo from './logo.svg';
import ic_cadastro from './assets/ico/ic_cadastro.svg';
import ic_clientes from './assets/ico/ic_clientes.svg';
import ic_dashboard from './assets/ico/ic_dashboard.svg';
import ic_logo from './assets/ico/ic_logo.svg';
import ic_menu from './assets/ico/ic_menu.svg';
import ic_totais from './assets/ico/ic_totais.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const icons = [
    ic_cadastro,
    ic_clientes,
    ic_dashboard,
    ic_logo,
    ic_menu,
    ic_totais
  ].map((icon, i) => (
    <div key={i} className="col-4" style={{ backgroundColor: 'green' }}>
      <img src={icon} alt="teste" style={{ minHeight: '3rem' }} />
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <p style={{ fontFamily: 'Avenir', fontSize: '2rem' }}>
        Teste com fonte: Avenir
      </p>
      <p style={{ fontFamily: 'DIN', fontSize: '2rem' }}>
        Teste com fonte: DIN Condensed Bold
      </p>
      <div className="container">
        <div className="row">{icons}</div>
      </div>
    </div>
  );
}

export default App;
