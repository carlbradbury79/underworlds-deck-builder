import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Cards from './components/Cards';
import DeckContextProvider from './context/DeckContext';
import Deck from './components/Deck';
import Nav from './components/Nav';

function App() {
  const element = <FontAwesomeIcon icon={faReact} />;

  return (
    <div className='App'>
      <DeckContextProvider>
        <h1>{element} Just a Crit Deck Builder</h1>
        <Nav />

        <Cards />
        <Deck />
      </DeckContextProvider>
    </div>
  );
}

export default App;
