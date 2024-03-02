import React from 'react';
import {
  ContainerBag,
  BagContent,
  BagHeader,
  BagFooter,
  Tittle,
} from './Style';
import { IoMdClose } from 'react-icons/io';
import { CardButton } from '../Card/Style';

const Bag = () => {
  return (
    <ContainerBag>
      <BagContent>
        <BagHeader>
          <Tittle>Carrinho de Compras</Tittle>
          <IoMdClose size={28} />
        </BagHeader>
        <BagFooter>
          {' '}
          <Tittle>Total: </Tittle>
          <p>R$ 238,55</p>
          <CardButton>Fializar</CardButton>
        </BagFooter>
      </BagContent>
    </ContainerBag>
  );
};

export default Bag;
