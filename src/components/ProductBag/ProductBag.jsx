import React from 'react';
import {
  ContainerBag,
  BagContent,
  BagHeader,
  BagFooter,
  Tittle,
  BagProducts,
  ButtonCheckout,
  MessageCheckout,
  PriceCheckout,
  BagItem,
} from './Style';

import { IoMdClose } from 'react-icons/io';

const Bag = ({ setOpenBag, openBag }) => {
  return (
    <ContainerBag>
      <BagContent openBag={openBag}>
        <BagHeader>
          <Tittle>Carrinho de Compras</Tittle>
          <IoMdClose size={28} onClick={() => setOpenBag(false)} />
        </BagHeader>

        <BagProducts>
          <BagItem></BagItem>
        </BagProducts>

        <BagFooter>
          <p>0 itens</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Tittle>Total: </Tittle>

            <PriceCheckout>R$ 238,55</PriceCheckout>
          </div>

          <ButtonCheckout>Finalizar</ButtonCheckout>

          <MessageCheckout>
            Complete sua compra e receba seus itens em breve !
          </MessageCheckout>
        </BagFooter>
      </BagContent>
    </ContainerBag>
  );
};

export default Bag;
