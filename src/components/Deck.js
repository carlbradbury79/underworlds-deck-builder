import React, { useContext } from 'react';
import { DeckContext } from '../context/DeckContext';
import Card from './Card';
import styled from 'styled-components';

const DeckLayout = styled.ul`
  list-style: none;
  display: flex;
`;

const Deck = () => {
  const { objectives, ploys, upgrades } = useContext(DeckContext);
  let totalRestricted = 0;
  const restrictedObjectives = objectives.reduce((a, b) => {
    if (b.restricted) {
      console.log(a, b);
      return a + 1;
    }
  }, 0);
  const restrictedPloys = ploys.reduce((a, b) => {
    if (b.restricted) {
      console.log(a, b);
      return a + 1;
    }
  }, 0);
  const restrictedUpgrades = upgrades.reduce((a, b) => {
    if (b.restricted) {
      console.log(a, b);
      return a + 1;
    }
  }, 0);

  return (
    <div>
      <h1>Your Deck, Bitch!</h1>
      <p>
        Total restricted:
        {totalRestricted +
          restrictedObjectives +
          restrictedPloys +
          restrictedUpgrades}
      </p>
      <p>Objectives: {restrictedObjectives}</p>
      <p>Ploys: {restrictedPloys}</p>
      <p>Upgrades: {restrictedUpgrades}</p>
      <h2>Objectives</h2>
      <DeckLayout>
        {objectives.map(card => {
          return (
            <li>
              <Card key={card.number} {...card}></Card>
            </li>
          );
        })}
      </DeckLayout>
      <h2>Ploys</h2>
      <DeckLayout>
        {ploys.map(card => {
          return (
            <li>
              <Card key={card.number} {...card}></Card>
            </li>
          );
        })}
      </DeckLayout>
      <h2>Upgrades</h2>
      <DeckLayout>
        {upgrades.map(card => {
          return (
            <li>
              <Card key={card.number} {...card}></Card>
            </li>
          );
        })}
      </DeckLayout>
    </div>
  );
};

export default Deck;
