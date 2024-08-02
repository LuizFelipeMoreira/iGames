import React from 'react';
import { useProduct } from '../context/ProductContext';
import {
  Container,
  Item,
  SelectedItems,
  ShoopingArea,
  ProuctSection,
  TotalPrice,
} from '../styles/pages/Checkout';

const Checkout = () => {
  const { productsBag, calculateTotalPrice } = useProduct();

  return (
    <Container>
      <ProuctSection>
        <h1>Resumo do pedido: </h1>
        <SelectedItems>
          {productsBag.map((item) => (
            <Item key={item.id}>
              <img src={item.image} alt={item.title} />

              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Item>
          ))}
        </SelectedItems>
        <TotalPrice>Total: {calculateTotalPrice()}</TotalPrice>
      </ProuctSection>
      <ShoopingArea></ShoopingArea>
    </Container>
  );
};

export default Checkout;
