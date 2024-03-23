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

const ShoopingCart = ({ isOpen, setIsOpen }) => {
  return (
    <ContainerBag>
      <BagContent>
        <BagHeader>
          <Tittle>Carrinho de Compras</Tittle>
          <IoMdClose size={28} onClick={() => setIsOpen(false)} />
        </BagHeader>

        <BagProducts>
          <BagItem>
            <div>
              <img
                src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
                alt=""
              />
            </div>

            <div>
              <h4>Tomb Raider</h4>
              <p>R$ 228,00</p>
            </div>
          </BagItem>
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

export default ShoopingCart;
