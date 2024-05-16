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
import { Link } from 'react-router-dom';

const ShoopingCart = ({ isOpen, setIsOpen }) => {
  const { productsBag, RemoveProduct } = useProduct();

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

  function outsideClick(event) {
    if (event.target === event.currentTarget) {
      console.log(event.currentTarget);
      setIsOpen(false);
    }
  }

  return (
    <ContainerBag open={isOpen} onClick={outsideClick}>
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
                <Link to={`product/${product.id}`}>
                  <h4>{product.title}</h4>
                </Link>

                <p>{product.price}</p>
                <p onClick={() => RemoveProduct(product.id)}>Remover</p>
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
