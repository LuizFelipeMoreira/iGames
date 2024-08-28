import React from 'react';
import { useProduct } from '../context/ProductContext';
import {
  Container,
  Item,
  SelectedItems,
  ShoopingArea,
  ProuctSection,
  TotalPrice,
  WrapperText,
  PaymentArea,
  Field,
  CheckoutButton,
} from '../styles/pages/Checkout';

import { Logo } from '../components/Header/styles';

import { GiPadlock } from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa6';

import Cards from '../assets/imgcards.png';

import { Link, useLocation } from 'react-router-dom';
import { FieldCheckout } from '../components/FieldCheckout';

const Checkout = ({ setIsCheckoutPage }) => {
  const { productsBag, calculateTotalPrice } = useProduct();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/checkout') setIsCheckoutPage(true);

    return () => setIsCheckoutPage(false);
  }, [location, setIsCheckoutPage]);

  return (
    <Container>
      <ShoopingArea>
        <Link to="/">
          <Logo>
            {' '}
            <FaGamepad />
            iGames
          </Logo>
        </Link>

        <PaymentArea>
          <div>
            <h3>Dados Pessoais</h3>

            <FieldCheckout
              label="Nome completo: "
              name="name"
              id="name"
              placeholder="Digite seu nome"
            />

            <FieldCheckout
              label="Email: "
              name="email"
              id="email"
              placeholder="Digite seu email"
            />

            <FieldCheckout
              label="Endereço: "
              name="address"
              id="address"
              placeholder="Digite seu endereço"
            />

            <FieldCheckout
              label="Cidade: "
              name="city"
              id="city"
              placeholder="Suzano - SP"
            />

            <div style={{ display: 'flex', gap: '10px' }}>
              <FieldCheckout
                label="Estado: "
                name="state"
                id="state"
                placeholder="Digite seu estado"
              />

              <FieldCheckout
                label="CEP: "
                name="cep"
                id="cep"
                maxLength={0}
                placeholder="00000-000"
              />
            </div>
          </div>

          <div>
            <h3>Pagamento</h3>

            <Field>
              <label htmlFor="name">Cartões aceitos: </label>
              <img src={Cards} alt="" />
            </Field>

            <FieldCheckout
              label="Nome no cartão: "
              name="cardName"
              id="cardName"
              placeholder=""
            />

            <FieldCheckout
              label="Número do cartão: "
              name="cardNumber"
              id="cardNumber"
              maxLength={19}
              placeholder="0000 0000 0000 0000"
            />

            <FieldCheckout
              label="Mês de validade: "
              name="month"
              id="month"
              placeholder="Março"
            />

            <div style={{ display: 'flex', gap: '10px' }}>
              <FieldCheckout
                label="Ano de validade: "
                name="year"
                id="year"
                maxLength={4}
                placeholder="2032"
              />

              <FieldCheckout
                label="CVV: "
                name="cvv"
                id="cvv"
                maxLength={3}
                placeholder="000"
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              gridColumn: 'span 2',
            }}
          >
            <Link to="/">Voltar para Home</Link>

            <CheckoutButton type="submit">
              <GiPadlock />
              Finalizar Compra
            </CheckoutButton>
          </div>
        </PaymentArea>
      </ShoopingArea>

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
        <hr />

        <WrapperText>
          <p>Quantidade de itens: </p>
          <TotalPrice>{productsBag.length}</TotalPrice>
        </WrapperText>

        <WrapperText>
          <p>Sub-total:</p>
          <TotalPrice>{calculateTotalPrice()}</TotalPrice>
        </WrapperText>

        <hr />

        <WrapperText>
          <p>Total</p>
          <h3>{calculateTotalPrice()}</h3>
        </WrapperText>
      </ProuctSection>
    </Container>
  );
};

export default Checkout;
