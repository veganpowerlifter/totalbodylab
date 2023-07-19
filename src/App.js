import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import TBLlogo from './app/assets/img/logo.png';
import './App.css';
import CoachCard from './features/campsites/CoachCard.js';
import { COACHES } from './app/shared/COACHES';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={TBLlogo} alt='totalbodylab logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
    </div>
  );
}

export default App;
