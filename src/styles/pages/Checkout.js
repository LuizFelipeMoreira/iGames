import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 100%;
  font-family: 'Poppins';

  @media ${Theme.device.tablet} {
    padding: 10px;
  }

  @media ${Theme.device.mobile} {
    padding: 0 1rem;
  }
`;

export const ProuctSection = styled.section`
  background: ${Theme.colors.gray0};
  height: 100vh;
  padding: 30px;
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
  // border-bottom: 1px solid gray;
  font-size: 0.875rem;

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
  background-color: ${Theme.colors.white};
  height: 100vh;
  padding: 30px;
`;

export const PaymentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 100%;
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
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
    padding: 5px;
    width: 100%;
    border: 1px solid #e0dfdf;
    padding: 10px;
    border-radius: 5px;
    //outline: none;
    font-size: ${Theme.Sizes.normal};
  }
`;
