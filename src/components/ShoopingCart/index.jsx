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
} from './style';

import { IoMdClose } from 'react-icons/io';
import { useProduct } from '../../context/ProductContext';

const ShoopingCart = ({ isOpen, setIsOpen }) => {
  const { productsBag } = useProduct();

  console.log(productsBag);

  function calculateTotalPrice() {
    const totalPrice = productsBag.reduce((acc, product) => {
      const priceWithoutCurrencySymbol = product.price
        .replace(/[R$]/g, '')
        .replace(',', '.');

      const parsedPrice = parseFloat(priceWithoutCurrencySymbol);

      return acc + parsedPrice;
    }, 0);

    const formattedPrice = totalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formattedPrice;
  }

  return (
    <ContainerBag>
      <BagContent>
        <BagHeader>
          <Tittle>Carrinho de Compras</Tittle>
          <IoMdClose size={28} onClick={() => setIsOpen(false)} />
        </BagHeader>

        <BagProducts>
          {productsBag.map((product) => (
            <BagItem key={product.id}>
              <div>
                <img src={product.image} alt="" />
              </div>

              <div>
                <h4>{product.title}</h4>
                <p>{product.price}</p>
              </div>
            </BagItem>
          ))}
        </BagProducts>

        <BagFooter>
          <p>{productsBag.length} itens</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Tittle>Total: </Tittle>

            <PriceCheckout>{calculateTotalPrice()}</PriceCheckout>
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
