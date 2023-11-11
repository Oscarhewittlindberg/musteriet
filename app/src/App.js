import './App.css';
import React from 'react';
import { Container } from 'semantic-ui-react'
import MenuNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Container>
        <MenuNavbar/>
      </Container>
      
    </div>
  );
}

export default App;
