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
  CreditCard,
  CreditCardHeader,
  CreditCardInfo,
} from '../styles/pages/Checkout';
import mastecard from '../assets/mastercard.png';
import Chip from '../assets/chip.png';

const Checkout = () => {
  const [cardValues, setCardValues] = React.useState({
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCVC: '',
  });
  const { productsBag, calculateTotalPrice } = useProduct();

  return (
    <Container>
      <ShoopingArea>
        <h1>Pagamento</h1>
        <CreditCard>
          <CreditCardHeader>
            <div>
              <img src={mastecard} alt="" />
              <p>Mastercard</p>
            </div>
            <img src={Chip} alt="" />
          </CreditCardHeader>

          <CreditCardInfo>
            <p>Numero do cartao</p>
            <p>0000 0000 0000 0000</p>
          </CreditCardInfo>

          <CreditCardInfo>
            <div>
              <p>Nome do proprietario</p>
              <p>Felipe Moreira Lima</p>
            </div>

            <div>
              <p>Validade</p>
              <p>00/00</p>
            </div>
          </CreditCardInfo>
        </CreditCard>
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
