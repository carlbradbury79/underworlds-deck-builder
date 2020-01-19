import React, { createContext, useState, useEffect } from 'react';

export const DeckContext = createContext();

export const DeckContextProvider = props => {
  const [objectives, setObjectives] = useState([]);
  const [ploys, setPloys] = useState([]);
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    console.log(objectives);
    console.log(ploys);
    console.log(upgrades);
  });

  const addDeck = card => {
    if (card.type === 'objective') {
      setObjectives([...objectives, card]);
    } else if (card.type === 'ploy') {
      setPloys([...ploys, card]);
    } else {
      setUpgrades([...upgrades, card]);
    }
  };

  // const addDeck = card => {
  //   if (deck.includes(card)) {
  //     setDeck(deck.filter(item => item !== card));
  //   } else {
  //     setDeck([...deck, card]);
  //   }
  // };

  return (
    <DeckContext.Provider value={{ objectives, ploys, upgrades, addDeck }}>
      {props.children}
    </DeckContext.Provider>
  );
};

export default DeckContextProvider;
