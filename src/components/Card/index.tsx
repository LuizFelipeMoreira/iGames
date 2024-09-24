import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardButton, CardContent, CardImage, CardTittle } from './styles';

import { FaXbox } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { TiVendorAndroid } from 'react-icons/ti';
import { FaWindows } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

interface PropsGameCard {
  image: string;
  id: number;
  title: string;
  rating: number;
  price: string;
  onClick: ({ currentTarget }: { currentTarget: HTMLElement }) => void;
  isActive: boolean;
}

export const GameCard = ({
  image,
  id,
  title,
  price,
  onClick,
  isActive,
}: PropsGameCard) => {
  return (
    <Card>
      <CardImage src={image} alt="card image" />
      <CardContent id={String(id)}>
        <Link to={`product/${id}`}>
          <CardTittle>{title}</CardTittle>
          <FaPlaystation /> <FaXbox /> <TiVendorAndroid /> <FaWindows />
          <p>{price}</p>
        </Link>

        <CardButton onClick={onClick}>
          {isActive ? (
            <>
              {' '}
              Adicionado <FaCheckCircle />
            </>
          ) : (
            <>
              <MdOutlineShoppingCart /> Adicionar
            </>
          )}
        </CardButton>
      </CardContent>
    </Card>
  );
};
