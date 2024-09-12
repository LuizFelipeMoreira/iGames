import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  min-height: 100vh;
  font-family: 'Poppins';

  @media ${Theme.device.tablet} {
    padding: 10px;
  }

  @media ${Theme.device.mobile} {
    padding: 0 1rem;
  }
`;

export const ProuctSection = styled.section`
  position: fixed;
  width: 50%;
  height: 100vh;
  right: 0;
  padding: 30px;
  background: ${Theme.colors.gray0};
`;

export const SelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 550px;
  gap: 10px;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;
  font-size: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 50px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const TotalPrice = styled.h5`
  margin-top: 10px;
`;

export const ShoopingArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-self: end;
  background-color: ${Theme.colors.white};
  min-width: 50%;
  height: 100vh;
  padding: 30px;

  h1 {
    margin: 0 auto;
    align-self: center;
  }
`;

export const PaymentArea = styled.div`
  min-width: 100%;
  justify-items: end;

  div {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const CheckoutButton = styled.button`
  width: 60%;
  grid-column: span 2;
  padding: 10px;
  background: #2bbe49;
  color: #fff;
  border-radius: 5px;
  font-weight: 50070;
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &:hover {
    background: #26a840;
  }
`;
