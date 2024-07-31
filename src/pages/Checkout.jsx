import React from 'react';
import { useProduct } from '../context/ProductContext';
import {
  Container,
  Item,
  SelectedItems,
  ShoopingArea,
} from '../styles/pages/Checkout';

const Checkout = () => {
  const { productsBag } = useProduct();

  return (
    <Container>
      <SelectedItems>
        <h1>Checkout</h1>
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
      <ShoopingArea></ShoopingArea>
    </Container>
  );
};

export default Checkout;
