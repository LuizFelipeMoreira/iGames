import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardButton,
  CardContent,
  CardImage,
  CardTittle,
  Rating,
} from './style';

import { FaXbox } from 'react-icons/fa';
import { FaPlaystation } from 'react-icons/fa';
import { TiVendorAndroid } from 'react-icons/ti';
import { FaWindows } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

import { useProduct } from '../../context/ProductContext';

export const GameCard = ({
  image,
  id,
  title,
  rating,
  price,
  onClick,
  isActive,
}) => {
  const { error } = useProduct();

  return (
    <Card>
      <CardImage src={image} alt="card image" />
      <CardContent id={id}>
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
