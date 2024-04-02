import React from 'react';
import {
  Card,
  CardButton,
  CardContent,
  CardImage,
  CardTittle,
  Rating,
} from './Style';

const GameCard = ({ image, id, title, rating, price, onClick }) => {
  return (
    <Card>
      <CardImage src={image} alt="card image" />
      <CardContent id={id}>
        <CardTittle>{title}</CardTittle>
        <p>{price}</p>
        <CardButton onClick={onClick}>Adicionar</CardButton>
      </CardContent>
    </Card>
  );
};

export default GameCard;
