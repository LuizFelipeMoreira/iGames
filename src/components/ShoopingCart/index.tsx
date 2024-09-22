import React, { MouseEvent } from 'react';
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
} from './styles';

import { IoMdClose } from 'react-icons/io';
import { useProduct } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

interface SohoopingCartProps {
  isOpen?: boolean;
  setIsOpen: (arg: boolean) => void;
}

const ShoopingCart = ({ setIsOpen }: SohoopingCartProps) => {
  const { productsBag, RemoveProduct, calculateTotalPrice } = useProduct();
  const TotalPrice = calculateTotalPrice();

  const outsideClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <ContainerBag onClick={outsideClick}>
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

            <PriceCheckout>{TotalPrice}</PriceCheckout>
          </div>

          <ButtonCheckout onClick={() => setIsOpen(false)}>
            <Link to="/checkout">Finalizar</Link>
          </ButtonCheckout>

          <MessageCheckout>
            Complete sua compra e receba seus itens em breve !
          </MessageCheckout>
        </BagFooter>
      </BagContent>
    </ContainerBag>
  );
};

export default ShoopingCart;
