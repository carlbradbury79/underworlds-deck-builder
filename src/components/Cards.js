import React from 'react';
// import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import styled from 'styled-components';
const cardData = require('../data/cardData.json');

// cardData.map(card => {
//   console.log(card.number, card.forsaken);
// });

// const NV = 557;
// const NVPU = 5;
// const BG = 438;
// const powerUnboundCards = [];

// for (let c = 1; c < NVPU + 1; c++) {
//   powerUnboundCards.push('NVPU' + c.toString());
// }

const CardLayout = styled.ul`
  list-style: none;
  display: flex;
`;

const Cards = () => {
  return (
    <div>
      <CardLayout>
        {cardData.map(card => {
          // console.log('loop', card);
          return (
            <li>
              <Card key={card.number} {...card}></Card>
            </li>
          );
        })}
      </CardLayout>
    </div>
  );
};

export default Cards;
