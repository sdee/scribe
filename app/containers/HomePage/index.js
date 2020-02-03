/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useState, useCallback} from 'react';

import update from 'immutability-helper'
import ContentCard from '../../components/card'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

export default function HomePage() {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Card 1',
      },
      {
        id: 2,
        text: 'Card 2',
      },
      {
        id: 3,
        text: 'Card 3',
      },
      {
        id: 4,
        text: 'Card 4',
      },
      {
        id: 5,
        text:
          'Card 5',
      },
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <ContentCard
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
      <DndProvider backend={Backend}>
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
        </DndProvider>
      </>
    )
  }
}
  

