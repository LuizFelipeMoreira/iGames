import React from 'react';
import {
  Card,
  CardButton,
  CardContent,
  CardImage,
  CardTittle,
  Rating,
} from './Style';
import { ProductContext } from '../../Context/ProudctsContext';

const GameCard = ({ background_image, id, name, rating }) => {
  const { AddNewProduct } = React.useContext(ProductContext);

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
        <CardButton onClick={AddNewProduct}>Adicionar</CardButton>
      </CardContent>
    </Card>
  );
};

export default GameCard;
