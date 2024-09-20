import styled from 'styled-components';
import Theme from '../../Theme/Theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  min-height: 100vh;
  font-family: 'Poppins';

  @media ${Theme.device.tablet} {
    grid-template-columns: 1fr;
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
  border: 1px solid #dfdfdf;

  @media ${Theme.device.tablet} {
    top: 80;
    width: 100%;
    height: max-content;
  }
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

  @media ${Theme.device.tablet} {
    justify-self: center;
  }

  @media ${Theme.device.mobile} {
    padding: 0px;
  }
`;

export const PaymentArea = styled.div`
  width: 600px;

  @media ${Theme.device.mobile} {
    width: 100%;
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

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  img {
    display: block;
    max-width: 60%;
    height: 40px;
  }

  input {
    width: 100%;
    border: 2px solid #e0dfdf;
    padding: 12px;
    border-radius: 5px;
    font-size: ${Theme.Sizes.medium};
  }
`;
