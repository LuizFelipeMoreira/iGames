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
  padding-top: 10px;

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

export const RelatedGameCard = styled.div`
  display: grid;
  max-width: 30%;
  color: ${Theme.colors.white};
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    opacity: 0;
    grid-area: 1/-1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: 0.7 ease;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    display: block;
    width: 100%;
    grid-area: 1/-1;
    min-height: 450px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: 1/-1;
  place-self: center;
  z-index: 999;
`;

export const GameTitle = styled.h4`
  font-size: ${Theme.Sizes.xlarge};
  font-weight: 600;
  text-align: center;
`;

export const ButtonGameCard = styled.button`
  max-width: max-content;
  padding: 0.6rem 1.5rem;
  border: 2px solid ${Theme.colors.white};
  background: transparent;
  color: ${Theme.colors.white};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background: ${Theme.colors.white};
    color: ${Theme.colors.black};
  }
`;
