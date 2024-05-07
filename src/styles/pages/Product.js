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
  flex-direction: row;
  gap: 20px;
  padding-top: 30px;

  .SwiperThumbs {
    margin-top: 10px;
    margin-right: 5px;
  }
`;

export const WrapperSlide = styled.div`
  max-width: 800px;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: 5px;
`;

export const InformationGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    margin-top: 10px;
    font-size: 2rem;
  }
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: max-content;
  font-size: 1.125rem;
  background: #252525;
  color: ${Theme.colors.white};
  padding: 20px 20px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #0a0a0a;
  }

  &:disabled {
    cursor: not-allowed;
    //  pointer-events: none;
    background-color: gray;
  }
`;

export const Tittle = styled.h1`
  font-size: 2.25rem;
  color: ${Theme.colors.black};
  margin-bottom: 20px;
`;

export const Description = styled.p``;
