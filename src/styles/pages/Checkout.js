import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  padding: 2rem 3rem;
  margin: 0 auto;
  font-family: 'Poppins';

  @media ${Theme.device.tablet} {
    padding: 10px;
  }

  @media ${Theme.device.mobile} {
    padding: 0 1rem;
  }
`;

export const ProuctSection = styled.section`
  max-width: 500px;
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

export const TotalPrice = styled.h3``;

export const ShoopingArea = styled.section``;

export const Payment = styled.div``;
