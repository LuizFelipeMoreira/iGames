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
  Field,
  PaymentArea,
  FormCard,
} from '../styles/pages/Checkout';

import {
  CreditCard,
  CreditCardHeader,
  CreditCardInfo,
  CreditCardFooter,
} from '../styles/pages/Checkout';

import mastecard from '../assets/mastercard.png';
import Chip from '../assets/chip.png';

import { Logo } from '../components/Header/styles';
import { FaGamepad } from 'react-icons/fa6';

import { Link, useLocation } from 'react-router-dom';

const Checkout = ({ setIsCheckoutPage }) => {
  const [cardValues, setCardValues] = React.useState({
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCVC: '',
  });
  const { productsBag, calculateTotalPrice } = useProduct();
  const location = useLocation();
  const [cardNumber, setCardNumber] = React.useState('');

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\s+/g, ''); // Remove espaços existentes
    const formattedInput = input.replace(/(\d{4})/g, ' ').trim(); // Adiciona um espaço a cada 4 dígitos
    setCardNumber(formattedInput);
  };

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

        <h1>Pagamento</h1>
        <PaymentArea>
          <CreditCard>
            <CreditCardHeader>
              <div>
                <img src={mastecard} alt="" />
                <p>Mastercard</p>
              </div>
              <img src={Chip} alt="" />
            </CreditCardHeader>

            <CreditCardInfo>
              <span>Numero do cartao</span>
              <p>{cardNumber}</p>
            </CreditCardInfo>

            <CreditCardFooter>
              <div>
                <span>Nome do proprietario</span>
                <p>Felipe Moreira Lima</p>
              </div>

              <div>
                <span>Validade</span>
                <p>00/00</p>
              </div>
            </CreditCardFooter>
          </CreditCard>

          <FormCard action="">
            <Field className="colum1">
              <label htmlFor="cardNumber">Numero do cartão</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={cardNumber}
                maxLength={19}
                onChange={handleCardNumberChange}
              />
            </Field>

            <Field>
              <label htmlFor="cardName">Nome do proprietario</label>
              <input
                type="text"
                name="cardName"
                id="cardName"
                value={cardValues.cardName}
                onChange={(e) =>
                  setCardValues({ ...cardValues, cardName: e.target.value })
                }
              />
            </Field>

            <Field>
              <label htmlFor="cardMonth">Validade</label>
              <input
                type="text"
                name="cardMonth"
                id="cardMonth"
                value={cardValues.cardMonth}
                onChange={(e) =>
                  setCardValues({ ...cardValues, cardMonth: e.target.value })
                }
              />
            </Field>

            <Field className="colum1">
              <label htmlFor="cardCVC">CVC</label>
              <input
                type="text"
                name="cardCVC"
                id="cardCVC"
                value={cardValues.cardCVC}
                onChange={(e) =>
                  setCardValues({ ...cardValues, cardCVC: e.target.value })
                }
              />
            </Field>
            <button className="colum1">Finalizar pedido</button>
          </FormCard>
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
