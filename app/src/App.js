import './App.css';
import React from 'react';
import { Container } from 'semantic-ui-react'
import MenuNavbar from './components/Navbar';

function App() {

  const backgroundImageStyle = {
    backgroundImage: 'url("/path/to/your/image.jpg")',
    backgroundSize: 'cover', // Adjust this based on your needs
    backgroundPosition: 'center', // Adjust this based on your needs
    height: '400px', // Set the desired height
    // You can add more styles as needed
  };

  return (
    <div className="App">
      <Container style={backgroundImageStyle}>
        <MenuNavbar/>
      </Container>
      
    </div>
  );
}

export default App;
