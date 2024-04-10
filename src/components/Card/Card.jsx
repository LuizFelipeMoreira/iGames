import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`product/${id}`}>
          <CardTittle>{title}</CardTittle>
          <p>{price}</p>
        </Link>
        <CardButton onClick={onClick}>Adicionar</CardButton>
      </CardContent>
    </Card>
  );
};

export default GameCard;
