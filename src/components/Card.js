import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { DeckContext } from '../context/DeckContext';

// Style the card
const UnderworldCard = styled.img`
  width: 100px;
  margin: 10px;
  border: 2px solid ${props => (props.selected ? 'red' : 'black')};
`;

const Card = card => {
  const { addDeck } = useContext(DeckContext);

  // console.log('card', card);

  // Fix for passing in props... TODO
  // const newCard = card.name;

  // console.log('card', newCard.number);

  // Selected state for each card
  let [select, setSelect] = useState(false);

  //   When card is clicked
  function selectCard() {
    setSelect((select = !select));
    addDeck(card);
  }

  return (
    <UnderworldCard
      src={`https://images.warhammerunderworlds.com/en/${card.number}.png`}
      alt=''
      onClick={selectCard}
      selected={select}
    />
  );
};

export default Card;
