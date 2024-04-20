import styled from 'styled-components';
import Theme from '../../theme/Theme';

export const ContainerProduct = styled.div`
  max-width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  font-family: 'Poppins';
  padding-top: 60px;

  @media (max-width: 920px) {
    padding: 0;
  }

  @media (max-width: 768px) {
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SlideImage = styled.img`
  aspect-ratio: 16/9;
  display: block;
  border-radius: 5px;
`;

export const InformationGame = styled.div``;

export const ButtonAddToCart = styled.button``;

export const Tittle = styled.h1`
  font-size: 2.25rem;
  color: ${Theme.colors.black};
  margin-bottom: 20px;
`;

export const Description = styled.p``;
