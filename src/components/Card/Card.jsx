import React from 'react';
import {
  Card,
  CardButton,
  CardContent,
  CardImage,
  CardTittle,
  Rating,
} from './Style';

const GameCard = ({ background_image, id, name, rating }) => {
  return (
    <Card id={id}>
      <CardImage src={background_image} alt="card image" />
      <CardContent>
        <CardTittle>{name}</CardTittle>

        <p>
          {Math.floor(Math.random() * 256).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <CardButton>Adicionar</CardButton>
      </CardContent>
    </Card>
  );
};
<Card></Card>;

export default GameCard;
